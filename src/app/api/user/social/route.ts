import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db"; // Assuming your Prisma Client instance

import { NextResponse } from "next/server";

// **GET All Accounts**
export async function GET(req: Request) {
  try {
    const accounts = await db.account.findMany({
      include: { profile: true }, // Include nested profile data
    });

    return NextResponse.json({
      data: accounts,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Error retrieving accounts",
    });
  }
}

// **GET Specific Account**
// export async function GET(_req, id) {
//   try {
//     const accountId = id?.toString(); // Ensure ID is a string
//     if (!accountId) {
//       return NextResponse.json({
//         status: 400,
//         message: "Missing account ID",
//       });
//     }

//     const account = await db.account.findUnique({
//       where: { id: accountId },
//       include: { profile: true }, // Include nested profile data
//     });

//     if (!account) {
//       return NextResponse.json({
//         status: 404,
//         message: "Account not found",
//       });
//     }

//     return NextResponse.json({
//       data: account,
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({
//       status: 500,
//       message: "Error retrieving account",
//     });
//   }
// }

// **POST Create New Account** (assuming user is authenticated)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, username, userId } = body;

    if (!type || !username) {
      return NextResponse.json({
        status: 400,
        message: "Missing required account data",
      });
    }
    const verifyDuplicate = await db.account.findUnique({
      where: { type: type },
    });
    if (verifyDuplicate) {
      return NextResponse.json({
        status: 401,
        message: "The account has already been added",
      });
    }

    const newAccount = await db.account.create({
      data: {
        userId,
        type,
        username,
        avatar: "",
      },
    });

    return NextResponse.json({
      data: newAccount,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Error creating account",
    });
  }
}

// **PUT Update Existing Account** (implement authorization for specific user)
// export async function PUT(req, id) {
//   try {
//     const accountId = id?.toString(); // Ensure ID is a string
//     const updateData = await req.json();

//     if (!accountId || !updateData) {
//       return NextResponse.json({
//         status: 400,
//         message: "Missing account ID or update data",
//       });
//     }

//     const updatedAccount = await db.account.update({
//       where: { id: accountId },
//       data: updateData,
//     });

//     if (!updatedAccount) {
//       return NextResponse.json({
//         status: 404,
//         message: "Account not found",
//       });
//     }

//     return NextResponse.json({
//       data: updatedAccount,
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({
//       status: 500,
//       message: "Error updating account",
//     });
//   }
// }

// // **DELETE Delete Account** (implement authorization for specific user)
// export async function DELETE(req, id) {
//   try {
//     const accountId = id?.toString(); // Ensure ID is a string

//     if (!accountId) {
//       return NextResponse.json({
//         status: 400,
//         message: "Missing account ID",
//       });
//     }

//     const deletedAccount = await db.account.delete({
//       where: { id: accountId },
//     });

//     if (!deletedAccount) {
//       return NextResponse.json({
//         status: 404,
//         message: "Account not found",
//       });
//     }

//     return NextResponse.json({
//       message: "Account deleted successfully",
//     });
//   }
// }
