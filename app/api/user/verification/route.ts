import { NextResponse } from "next/server";
import RandomCodeGenerator from "../../../../lib/radomcodegenerator";
import { db } from "../../../../lib/db";

import { sendEmail } from "../../../../lib/mailer";
import { getCurrentUser } from "../../../../lib/session";

const ONE_HOUR_IN_MS = 60 * 60 * 1000;

export async function GET(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({
      status: 401, // Unauthorized
      message: "Not authorized user",
    });
  }

  try {
    const verification = await db.verification.findUnique({
      where: { userId: user.id },
    });

    if (!verification) {
      return NextResponse.json({
        status: 404,
        message: "Verification not found.",
      });
    }

    const currentTime = new Date();
    const timeSinceLastUpdate =
      currentTime.getTime() - new Date(verification.lastUpdated).getTime();

    // checking the expiry of verification code
    const isExpired = timeSinceLastUpdate >= ONE_HOUR_IN_MS;
    //sending data to user
    return NextResponse.json({
      status: 200,
      data: {
        isVerified: verification.verified,
        isExpired,
        expiryTime: new Date(verification.lastUpdated).getTime() / 1000 + 3600,
      },
    });
  } catch (error) {
    console.error("Error fetching verification status:", error);
    return NextResponse.json({
      status: 500,
      message: "Error fetching verification status.",
    });
  }
}

// Handle PATCH requests (resend verification code if expired)
export async function PATCH(req: Request) {
  const { id, resetPassword } = await req.json(); // Extracting the user ID from the request body

  try {
    const verification = await db.verification.findUnique({
      where: { userId: id }, // Useing the extracted ID to find the verification record
    });

    if (!verification) {
      return NextResponse.json({
        status: 404,
        message: "Verification not found.",
      });
    }

    if (resetPassword) {
      const currentTime = new Date();
      const timeSinceLastUpdate =
        currentTime.getTime() - new Date(verification.lastUpdated).getTime();

      if (timeSinceLastUpdate < ONE_HOUR_IN_MS) {
        return NextResponse.json({
          status: 200,
          message: "Verification code is still valid. Please check your email.",
        });
      }

      // Generate and send a new verification code
      const verificationCode = RandomCodeGenerator();
      await db.verification.update({
        where: { userId: id }, // Use the extracted ID to update the verification record
        data: { verificationCode, lastUpdated: currentTime },
      });

      const user = await db.user.findUnique({
        where: { id }, // Use the extracted ID to find the user
      });

      if (!user) {
        return NextResponse.json({
          status: 404,
          message: "User not found.",
        });
      }

      const sender = {
        name: "The Linkify",
        address: process.env.MAILER_EMAIL as string,
      };
      const recipients = [
        {
          name: user.username,
          address: user.email,
        },
      ];

      try {
        await sendEmail({
          sender,
          receiver: recipients,
          subject: "Your Linkify Password reset Code",
          message: `Please Enter the code to reset your password: ${verificationCode}`,
        });

        return NextResponse.json({
          status: 200,
          data: {
            isExpired: false,
            lastUpdated: verification.lastUpdated,
          },
        });
      } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({
          status: 500,
          message: "Error sending verification email.",
        });
      }
    }

    const currentTime = new Date();
    const timeSinceLastUpdate =
      currentTime.getTime() - new Date(verification.lastUpdated).getTime();

    if (timeSinceLastUpdate < ONE_HOUR_IN_MS) {
      return NextResponse.json({
        status: 400,
        message: "Verification code is still valid. Please check your email.",
      });
    }

    // Generate and send a new verification code
    const verificationCode = RandomCodeGenerator();
    await db.verification.update({
      where: { userId: id }, // Use the extracted ID to update the verification record
      data: { verificationCode, lastUpdated: currentTime, verified: false },
    });

    const user = await db.user.findUnique({
      where: { id }, // Use the extracted ID to find the user
    });

    if (!user) {
      return NextResponse.json({
        status: 404,
        message: "User not found.",
      });
    }

    const sender = {
      name: "The Linkify",
      address: process.env.MAILER_EMAIL as string,
    };
    const recipients = [
      {
        name: user.username,
        address: user.email,
      },
    ];

    try {
      await sendEmail({
        sender,
        receiver: recipients,
        subject: "Your Linkify Verification Code",
        message: `Please verify your account using the following code: ${verificationCode}`,
      });

      return NextResponse.json({
        status: 200,
        data: {
          isVerified: verification.verified,
          isExpired: false,
          lastUpdated: verification.lastUpdated,
        },
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({
        status: 500,
        message: "Error sending verification email.",
      });
    }
  } catch (error) {
    console.error("Error updating verification code:", error);
    return NextResponse.json({
      status: 500,
      message: "Error updating verification code.",
    });
  }
}

// Handle DELETE requests (clear verification and mark as verified)
export async function DELETE(req: Request) {
  const { id, code } = await req.json();

  try {
    const verification = await db.verification.findUnique({
      where: { userId: id },
    });

    if (!verification) {
      return NextResponse.json({
        status: 404,
        message: "Verification not found.",
      });
    }
    if (code !== verification.verificationCode?.toString()) {
      return NextResponse.json({
        status: 400,
        message: "uh oh ! code didnot match",
      });
    }
    await db.verification.update({
      where: { userId: id },
      data: { verificationCode: null, verified: true, lastUpdated: new Date() },
    });

    return NextResponse.json({
      status: 200,
      message: "User verified successfully. Verification code cleared.",
      data: {
        isVerified: verification.verified,
        isExpired: false,
        lastUpdated: verification.lastUpdated,
      },
    });
  } catch (error) {
    console.error("Error verifying user:", error);
    return NextResponse.json({
      status: 500,
      message: "Error verifying user.",
    });
  }
}
