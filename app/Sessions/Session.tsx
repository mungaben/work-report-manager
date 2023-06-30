import React from "react";
import { getServerSession } from "next-auth";

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authOptions } from "../api/auth/[...nextauth]/route";
import sessiondata from "./Sess";

const Session = async () => {
  // console.log("sessiondata all data available", sessiondata);
  // const datas =sessiondata;
  // console.log("session data available", datas.name);

  const session = await getServerSession(authOptions);
  console.log("session data available", session);
  return (
    <div>
      <h1>Session</h1>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      user
    </div>
  );
};

export default Session;
