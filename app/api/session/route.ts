import { getServerSession } from "next-auth";

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  console.log("session data available", session);
  

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}