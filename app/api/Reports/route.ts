


import { log } from "console";
// import { prisma } from "../../../components/Prisma/Prisma";
import { prisma } from "@/config/prisma"
import { NextRequest, NextResponse } from "next/server"






export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const reports = await prisma.report.findMany({
            include: {
                author: true
            },
            orderBy: {
                from: 'asc'

            }
        })

        return NextResponse.json(reports)
    }
    catch (err) {
        return NextResponse.json({ error: err })
    }

}

export async function POST(req: NextRequest, res: NextResponse) {
   
    // console.log("data", req)
    // const body=bodybody.datatopost
    // console.log("body1", body);
    const { to, from, Basis2, Interface, cms, spms, newperpay, oldperpay, utilitymaster, internet, exchangemail, comments, authorId } = await  req.json();


    try {
        // console.log("data invoked", body);
        // console.log(Object.keys(body).length);
        console.log(to, from, Basis2, Interface, cms, spms, newperpay, oldperpay, utilitymaster, internet, exchangemail, comments, authorId );
        
        const report = await prisma.report.create({
            data: {
                from:from,
                to:to,
                Basis2: Basis2,
                Interface: Interface,
                cms: cms,
                spms: spms,
                newperpay: newperpay,
                oldperpay: oldperpay,
                utilitymaster: utilitymaster,
                internet: internet,
                exchangemail: exchangemail,
                comments: comments,
                authorId: authorId||null
            }
        });
        console.log("report", report);
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
        const report = await prisma.report.update({
            where: {
                id: data.id
            },
            data: {
                Basis2: data.Basis2,
                from: data.from,
                to: data.to,
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
    catch (err) {
        return NextResponse.json({ error: err })
    }

}
