import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

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

    const generateRandomCode = () => {
      const min = 1000;
      const max = 9999;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const code: string = `${generateRandomCode()}`;

    // Hash password before saving
    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        email,
        username,
        verificationCode: code,
        verification: false,
        password: hashedPassword,
        name: "", // Provide default value for optional field
        imageUrl: "", // Provide default value for optional field
      },
    });

    // Send only necessary user data (e.g., user ID) in the response
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json({
      status: 201,
      message: newUser,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Error creating user",
    });
  }
}
// Handle PUT requests (update user information)
// export async function PUT(req: Request) {
//   try {
//     const { id, ...updateData } = await req.json(); // Destructure id and update data

//     const updatedUser = await db.user.update({
//       where: { id },
//       data: updateData,
//     });

//     if (!updatedUser) {
//       return NextResponse.json({
//         status: 404,
//         message: "User not found",
//       });
//     }

//     return NextResponse.json({
//       status: 200,
//       message: "User updated successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({
//       status: 500,
//       message: "Error updating user",
//     });
//   }
// }

// Handle DELETE requests (delete a user)
// export async function DELETE(req: Request) {
//   try {
//     const url = new URL(req.url, `http://${req.headers.get("host")}`); // Create a URL object
//     const userId = url.searchParams.get("id"); // Get user ID from query parameter

//     if (!userId) {
//       return NextResponse.json({
//         status: 400,
//         message: url,
//       });
//     }

//     const deletedUser = await db.user.delete({
//       where: { id: userId },
//     });

//     if (!deletedUser) {
//       return NextResponse.json({
//         status: 404,
//         message: "User not found",
//       });
//     }

//     return NextResponse.json({
//       status: 200,
//       message: "User deleted successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({
//       status: 500,
//       message: "Error deleting user",
//     });
//   }
// }
