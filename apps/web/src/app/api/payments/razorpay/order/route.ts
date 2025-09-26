import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // TODO: create Razorpay order from amount, return order id
  return NextResponse.json({ error: "Not implemented" }, { status: 501 });
}
