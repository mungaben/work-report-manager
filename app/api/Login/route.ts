
import { prisma } from "../../../components/Prisma/Prisma"
import { NextRequest, NextResponse } from "next/server"
import Report from '@/components/Reports/Report';
import * as bcrypt from 'bcryptjs'


// get request






// post  request

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json()

    const user = await prisma.user.findFirst({
        where: {
            email: body.email
        }
    })
    if (user && (await bcrypt.compare(body.password, user.password))) {
        await prisma.activity.create({
            data: {
                authorId: user.id,
                content: "Login",
            }
              
        })

        const { password, ...userwithoutpassword } = user
        return NextResponse.json({ userwithoutpassword }, { status: 200 })

    } else {
        return NextResponse.json({ message: "Invalid email or password" }, { status: 400 })
    }

}