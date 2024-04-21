import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, socialId, content } = body;

    // Check if user exists (optional, consider adding user creation logic)
    const user = await db.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Validate social media account existence (optional)
    const social = await db.social.findUnique({ where: { id: socialId } });
    if (!social) {
      return NextResponse.json(
        { message: "Social media account not found" },
        { status: 404 }
      );
    }

    // Create a new post associated with the social media account
    const newPost = await db.post.create({
      data: {
        socialId,
        content,
        image: "", // Optional: Set image to an empty string by default
        likes: 0, // Initialize likes count to 0
        comments: 0, // Initialize comments count to 0
      },
    });

    return NextResponse.json(
      { post: newPost, message: "Post created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error creating post" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const body = await req.formData();
    console.log(body);
    // const { socialId } = body;

    // if (!socialId) {
    //   return NextResponse.json(
    //     { message: "Missing social media ID" },
    //     { status: 400 }
    //   );
    // }

    // const posts = await db.post.findMany({
    //   where: { socialId: socialId }, // Assuming socialId is an integer
    // });

    // return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Cannot load user's" },
      { status: 500 }
    );
  }
}
