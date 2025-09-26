import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // TODO: verify webhook signature and process events
  return NextResponse.json({ ok: true });
}
