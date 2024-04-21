import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password, subscribed } = body;
    //checking if the user already existed
    const existingUser = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUser) {
      return NextResponse.json(
        { user: null, message: "user already exists" },
        { status: 409 }
      );
    }
    const usernameConflict = await db.user.findUnique({
      where: { username: username },
    });
    if (usernameConflict) {
      return NextResponse.json(
        { user: null, message: "Username already in use " },
        { status: 405 }
      );
    }
    const hashPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashPassword,
        subscribed,
        imageUrl: "",
      },
    });
    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function GET(req: Request) {
  try {
    const body = await req.json();
    const { user } = body;
    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 505 });
    }
  } catch (error) {
    return NextResponse.json({ message: "NO users oh oh" }, { status: 501 });
  }
}
