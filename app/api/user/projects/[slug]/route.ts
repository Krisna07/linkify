import { NextResponse } from "next/server";
import { getCurrentUser } from "../../../../../lib/session";
import { db } from "../../../../../lib/db";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({
      status: 401, // Unauthorized
      message: "Not authorized user",
    });
  }

  try {
    const project = await db.project.findFirst({
      where: { name: params.slug.split("_").join(" ") },
      include: { boards: true },
    });

    if (!project) {
      return NextResponse.json({
        status: 404, // Not Found
        message: "Project not found",
      });
    }

    return NextResponse.json({
      status: 200, // OK
      data: project,
    });
  } catch (error) {
    console.error(error); // Logging the error for debugging
    return NextResponse.json({
      status: 500, // Internal Server Error
      message: "Error retrieving project",
    });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({
      status: 401, // Unauthorized
      message: "Not authorized user",
    });
  }

  try {
    const body = await req.json();
    const { name, type, isPrivate, image } = body;

    const updatedProject = await db.project.update({
      where: { id: params.slug },
      data: {
        name,
        type,
        isPrivate,
        image,
      },
    });

    return NextResponse.json({
      status: 200, // OK
      message: "Project updated successfully",
      updatedProject,
    });
  } catch (error) {
    console.error(error); // Logging the error for debugging
    return NextResponse.json({
      status: 500, // Internal Server Error
      message: "Error updating project",
    });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({
      status: 401, // Unauthorized
      message: "Not authorized user",
    });
  }

  try {
    await db.project.delete({
      where: { id: params.id },
    });

    return NextResponse.json({
      status: 200, // OK
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error(error); // Logging the error for debugging
    return NextResponse.json({
      status: 500, // Internal Server Error
      message: "Error deleting project",
    });
  }
}
