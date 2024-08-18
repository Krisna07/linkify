import { sendEmail } from "../../../lib/mailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, code } = body;

    const sender = {
      name: "The Linkify",
      address: "noreplylinkify@gmail.com",
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
        subject: "Welcome to new application",
        message: `Please verigfy your account using code: ${code}`,
      });
      return NextResponse.json({
        accepted: result.accepted,
      });
    } catch (error) {
      return NextResponse.json({
        status: 500,
        message: "Unable to send email",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Error sending email",
    });
  }
}
