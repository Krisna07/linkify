import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, username, social } = body;

    // Check if user exists (optional, consider adding user creation logic)
    const user = await db.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Validate social media username uniqueness within a user's account
    const existingSocial = await db.social.findUnique({
      where: { username: username },
    });
    if (existingSocial) {
      return NextResponse.json(
        { social: null, message: "Social username already exists" },
        { status: 409 } // Conflict
      );
    }

    // Create new social media account
    const newSocial = await db.social.create({
      data: {
        userId,
        username,
        social,
        profilePicUrl: "", // Set optional fields to default values if applicable
        totalPosts: 0,
        totalLikes: 0,
        totalComments: 0,
      },
    });

    return NextResponse.json(
      { social: newSocial, message: "Social added" },
      {
        status: 201, // Created
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error adding social media" },
      {
        status: 500, // Internal Server Error
      }
    );
  }
}
