

import prisma from "../../../config/prisma"
import { NextRequest, NextResponse } from "next/server"
import Report from '@/components/Reports/Report';

type UserData = {
    id: string,
    name: string,
    email: string,
    password: string,
}
type ReportData = {

}



export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const data = await prisma.user.findMany({
            include: {
                Reports: true
            }
        })
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    // const { Basis2,
    //     Interface,
    //     cms,
    //     spms,
    //     newperpay,
    //     oldperpay,
    //     utilitymaster,
    //     internet,
    //     exchangemail,
    //     comments,
    //     authorId } = req.body;
const body= await req.json()
try{

    const data = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password,
        }

    }
     );
    return NextResponse.json(data)

}
catch(error){
    return NextResponse.json(error)
   
}
}
