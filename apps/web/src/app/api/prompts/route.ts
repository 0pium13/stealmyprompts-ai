import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ success: true, data: [] });
}

export async function POST(req: NextRequest) {
  // TODO: verifyAuth, validate input, save prompt
  return NextResponse.json({ error: "Not implemented" }, { status: 501 });
}
