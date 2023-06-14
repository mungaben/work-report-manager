


import { log } from "console";
// import { prisma } from "../../../components/Prisma/Prisma";
import { prisma } from "@/config/prisma"
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";





export async function GET(req: NextRequest, res: NextResponse) {
    // const session=await getSession()
    // console.log("session",session );

    try {
        // if (session){
        const reports = await prisma.message.findMany({
            include: {
                author: true,
                receiver: true

            },
            orderBy: {
                createdAt: 'desc'

            }

        })

        return NextResponse.json(reports)
    }
    // }
    catch (err) {
        return NextResponse.json({ error: err })
    }

}


export async function POST(req: NextRequest, res: NextResponse) {

    // console.log("data", req)
    // const body=bodybody.datatopost
    // console.log("body1", body);
    const { content, receiverId, authorId } = await req.json();


    try {
        // console.log("data invoked", body);
        // console.log(Object.keys(body).length);


        const report = await prisma.message.create({
            data: {

                authorId: authorId || null,
                content: content,
                receiverId: receiverId

            }
        });
        // console.log("report", report);
        await prisma.activity.create({
            data: {
                authorId: authorId,
                content: "sent Message",


            }
        })
        return NextResponse.json(report);
    } catch (err) {
        if (err) {
            // The .code property can be accessed in a type-safe manner
            if (err === 'P2002') {
                console.log(
                    'There is a unique constraint violation, a new user cannot be created with this email'
                )
            }
        }
        return NextResponse.json({ error: err });




    }

}

export async function PUT(req: NextRequest, res: NextResponse) {
    const data = await req.json()
    console.log("data reports", data);
    // const {Basis2,  }=data


    try {
        const report = await prisma.message.update({
            where: {
                id: data.id
            },
            data: {
                content: data.content,
                receiverId: data.receiverId,
                authorId: data.authorId,
            }
        })
        await prisma.activity.create({
            data: {
                authorId: data.authorId,
                content: "Updated message",


            }
        })
        return NextResponse.json(report)
    }
    catch (err) {
        return NextResponse.json({ error: err })
    }

}
