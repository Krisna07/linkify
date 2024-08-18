import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { db } from "../../../lib/db";
import { hash } from "bcryptjs";
import RandomBgGenerator from "../../../lib/randombggenerator";
import RandomCodeGenerator from "../../../lib/radomcodegenerator";
import { sendEmail } from "../../../lib/mailer";
// import transporter from "@/lib/mailer";

export const GET = async (req: Request) => {
  const session = await getServerSession(authOptions);
  return NextResponse.json({ authenticated: !!session });
};
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    // Validate user data (implement validation logic here)

    // Check for existing user or username conflicts
    const existingUser = await db.user.findUnique({
      where: { email },
    });
    const usernameConflict = await db.user.findUnique({
      where: { username },
    });

    if (existingUser || usernameConflict) {
      return NextResponse.json({
        status: 409,
        message: "User already exists please sign in ",
      });
    }
    const hashedPassword = await hash(password, 10);

    //verification code handler
    const code = RandomCodeGenerator();
    const sender = {
      name: "The Linkify",
      address: process.env.MAILER_EMAIL as string,
    };
    const receipients = [
      {
        name: username,
        address: email,
      },
    ];
    try {
      const result = await sendEmail({
        sender,
        receiver: receipients,
        subject: "Welcome to Linkify",
        message: `Please verify your account using code: ${code}`,
      });
      NextResponse.json({
        accepted: result.accepted,
      });
    } catch (error) {
      NextResponse.json({
        status: 500,
        message: "Unable to send email",
      });
    }

    const newUser = await db.user.create({
      data: {
        email,
        username,
        verified: false,
        verificationCode: code,
        password: hashedPassword,
        name: "", // Provide default value for optional field
        avatar: RandomBgGenerator(), // Provide default value for optional field
      },
    });

    return NextResponse.json({
      status: 200,
      message: "User created successfully ",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Error creating user",
    });
  }
}
// Handle PUT requests (update user information)
export async function PUT(req: Request) {
  try {
    const { id, ...updateData } = await req.json(); // Destructure id and update data

    const updatedUser = await db.user.update({
      where: { id },
      data: updateData,
    });

    if (!updatedUser) {
      return NextResponse.json({
        status: 404,
        message: "User not found",
      });
    }

    return NextResponse.json({
      status: 200,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Error updating user",
    });
  }
}

// Handle DELETE requests (delete a user)
export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url, `http://${req.headers.get("host")}`); // Create a URL object
    const userId = url.searchParams.get("id"); // Get user ID from query parameter

    if (!userId) {
      return NextResponse.json({
        status: 400,
        message: url,
      });
    }

    const deletedUser = await db.user.delete({
      where: { id: userId },
    });

    if (!deletedUser) {
      return NextResponse.json({
        status: 404,
        message: "User not found",
      });
    }

    return NextResponse.json({
      status: 200,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Error deleting user",
    });
  }
}
