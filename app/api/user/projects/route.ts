import { NextResponse } from "next/server";
import { getCurrentUser } from "../../../../lib/session";
import { db } from "../../../../lib/db";

export async function GET(req: Request) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({
      status: 401, // Unauthorized
      message: "Not authorized user",
    });
  }

  try {
    const projects = await db.project.findMany({
      where: { userId: user.id },
      include: { boards: true }, // Ensure the relation name matches your schema
    });

    if (projects.length === 0) {
      return NextResponse.json({
        status: 404, // Not Found
        message: "No projects found",
      });
    }

    return NextResponse.json({
      status: 200, // OK
      data: projects,
    });
  } catch (error) {
    console.error(error); // Logging the error for debugging
    return NextResponse.json({
      status: 500, // Internal Server Error
      message: "Error retrieving projects",
    });
  }
}

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({
        status: 401, // Unauthorized
        message: "Restricted area: User not authenticated",
      });
    }

    const body = await req.json();
    const { name, type, isPrivate, image } = body;

    if (!name || !type) {
      return NextResponse.json({
        status: 400, // Bad Request
        message: "Missing required project data",
      });
    }

    // Check if the project already exists
    const existingProject = await db.project.findFirst({
      where: {
        name,
        userId: user.id,
      },
    });

    if (existingProject) {
      return NextResponse.json({
        status: 409, // Conflict
        message: "The project has already been added",
      });
    }

    const newProject = await db.project.create({
      data: {
        userId: user.id,
        name,
        type,
        isPrivate,
        image,
      },
    });

    return NextResponse.json({
      status: 201, // Created
      message: `New project ${name} added `,
      newProject,
    });
  } catch (error) {
    console.error(error); // Logging the error for debugging
    return NextResponse.json({
      status: 500, // Internal Server Error
      message: error,
    });
  }
}
