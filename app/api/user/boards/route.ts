import { NextResponse } from "next/server";
import { getCurrentUser } from "../../../../lib/session";
import { db } from "../../../../lib/db";
import RandomBgGenerator from "../../../../lib/randombggenerator";
import GenerateLink from "../../../../lib/linksluggenerator";

export async function GET(req: Request) {
  const user = await getCurrentUser();
  //   console.log(user?.id);

  if (!user) {
    return NextResponse.json({
      status: 505,
      message: "not authorized user",
    });
  }
  try {
    const boards = await db.board.findMany({
      where: { userId: user?.id },
      include: { Feedbacks: true }, //including ratings and feedbacks
    });
    if (boards.length < 0) {
      return NextResponse.json({
        status: 404,
        message: "No boards found",
      });
    }
    return NextResponse.json({
      data: boards,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Error retrieving boards",
    });
  }
}

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({
        status: 401,
        message: "Restricted area: User not authenticated",
      });
    }

    const body = await req.json();
    const { title, description, tags, image } = body;

    if (!title || !description) {
      return NextResponse.json({
        status: 400,
        message: "Missing required board data",
      });
    }
    // check if the board already exist
    const existingBoard = await db.board.findFirst({
      where: {
        AND: [{ title }],
      },
    });

    if (existingBoard) {
      return NextResponse.json({
        status: 401,
        message: "The board has already been added",
      });
    }
    const newBoard = await db.board.create({
      data: {
        userId: user.id,
        title: title,
        description: description,
        link: GenerateLink(title),
        tags,
        image: image ? image : RandomBgGenerator(),
      },
    });

    return NextResponse.json({
      status: 200,
      message: "New board added",
      newBoard,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Error creating board",
    });
  }
}
