


import {prisma} from "../../../components/Prisma/Prisma";
import { NextRequest, NextResponse } from "next/server"



export async function GET(req: NextRequest, res: NextResponse) {
    try{
    const reports = await prisma.report.findMany({})
    
    return NextResponse.json(reports)
    }
    catch(err){
        return NextResponse.json({error: err})
    }

}

export async function POST(req: NextRequest, res: NextResponse) {
    const  data = await req.json()
    console.log("data",data);
    
    try{
        const report = await prisma.report.create({
            data:{
                Basis2: data.Basis2,
                Interface: data.Interface,
                cms: data.cms,
                spms: data.spms,
                newperpay: data.newperpay,
                oldperpay: data.oldperpay,
                utilitymaster: data.utilitymaster,
                internet: data.internet,
                exchangemail: data.exchangemail,
                comments: data.comments,
                authorId: data.authorId,
            }
        })
        return NextResponse.json(report)
    }
    catch(err){
        return NextResponse.json({error: err})
    }

}

export async function PUT(req: NextRequest, res: NextResponse) {
    const  data = await req.json()
    console.log("data reports",data);
    // const {Basis2,  }=data
    
    
    try{
        const report = await prisma.report.update({
            where:{
                id: data.id
            },
            data:{
                Basis2: data.Basis2,
                Interface: data.Interface,
                cms: data.cms,
                spms: data.spms,
                newperpay: data.newperpay,
                oldperpay: data.oldperpay,
                utilitymaster: data.utilitymaster,
                internet: data.internet,
                exchangemail: data.exchangemail,
                comments: data.comments,
                authorId: data.authorId,
            }
        })
        return NextResponse.json(report)
    }
    catch(err){
        return NextResponse.json({error: err})
    }

}
