import { NextResponse } from "next/server";
import { getCurrentUser } from "../../../../../lib/session";
import { db } from "../../../../../lib/db";

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

  const { slug } = params; // Assuming slug is the board ID
  const body = await req.json();
  const { title, description, tags, image, boardColor } = body;

  try {
    const updatedBoard = await db.board.update({
      where: { id: slug, creator: user.username }, // Ensure the user owns the board
      data: {
        title,
        description,
        tags,
        image,
        boardColor,
      },
    });

    return NextResponse.json({
      status: 200, // OK
      message: "Board updated successfully",
      updatedBoard,
    });
  } catch (error) {
    console.error(error); // Logging the error for debugging
    return NextResponse.json({
      status: 500, // Internal Server Error
      message: "Error updating board",
    });
  }
}

// DELETE handler to delete a board
export async function DELETE(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const user = await getCurrentUser();
  console.log(req.url);

  if (!user) {
    return NextResponse.json({
      status: 401,
      message: "Not authorized user",
    });
  }

  const { slug } = params;

  try {
    const existingBoard = await db.board.findUnique({
      where: { id: slug, creator: user.username },
    });

    if (!existingBoard) {
      return NextResponse.json({
        status: 404,
        message: "Board not found",
      });
    }

    await db.board.delete({
      where: { id: slug, creator: user.username },
    });

    return NextResponse.json({
      status: 200,
      message: "Board deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting board:", error);
    return NextResponse.json({
      status: 500,
      message: "An unexpected error occurred while deleting the board.",
    });
  }
}
