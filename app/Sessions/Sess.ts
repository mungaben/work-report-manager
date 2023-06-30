


import { getServerSession } from "next-auth";

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authOptions } from "../api/auth/[...nextauth]/route";



const sessiondata=async()=>{
    const session = await getServerSession(authOptions);
    console.log(session);
    
}

export default sessiondata;