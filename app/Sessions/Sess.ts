


import { getServerSession } from "next-auth";

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authOptions } from "../api/auth/[...nextauth]/route";
// import sessiondata from '@/app/api/auth/sessions';


const sessiondata=async()=>{
    const session = await getServerSession(authOptions);
    console.log(session);
    
}

export default sessiondata;