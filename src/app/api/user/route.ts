import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ response: "This is respomse" });
}

export async function POST(request: Request) {
  return NextResponse.json({ response: "This is respomse" });
}
