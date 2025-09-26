import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // TODO: rateLimit, verifyAuth, zod schema, generate watermarked output
  return NextResponse.json({ error: "Not implemented" }, { status: 501 });
}
