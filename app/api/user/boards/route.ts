import { NextResponse } from "next/server";
import { getCurrentUser } from "../../../../lib/session";
import { db } from "../../../../lib/db";
import RandomBgGenerator from "../../../../lib/randombggenerator";
import GenerateLink from "../../../../lib/linksluggenerator";

export async function GET(req: Request) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({
      status: 401, // Unauthorized
      message: "Not authorized user",
    });
  }

  try {
    const boards = await db.board.findMany({
      where: { userId: user.id },
      include: { feedbacks: true }, // Ensure the relation name matches your schema
    });

    if (boards.length === 0) {
      return NextResponse.json({
        status: 404, // Not Found
        message: "No boards found",
      });
    }

    return NextResponse.json({
      status: 200, // OK
      data: boards,
    });
  } catch (error) {
    console.error(error); // Logging the error for debugging
    return NextResponse.json({
      status: 500, // Internal Server Error
      message: "Error retrieving boards",
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
    const { title, description, tags, image } = body;

    if (!title || !description) {
      return NextResponse.json({
        status: 400, // Bad Request
        message: "Missing required board data",
      });
    }

    // Check if the board already exists
    const existingBoard = await db.board.findFirst({
      where: {
        title,
        userId: user.id,
      },
    });

    if (existingBoard) {
      return NextResponse.json({
        status: 409, // Conflict
        message: "The board has already been added",
      });
    }

    const newBoard = await db.board.create({
      data: {
        userId: user.id,
        title,
        description,
        link: GenerateLink(title),
        tags,
        boardColor: RandomBgGenerator(),
        image: image,
      },
    });

    return NextResponse.json({
      status: 201, // Created
      message: "New board added",
      newBoard,
    });
  } catch (error) {
    console.error(error); // Logging the error for debugging
    return NextResponse.json({
      status: 500, // Internal Server Error
      message: "Error creating board",
    });
  }
}
