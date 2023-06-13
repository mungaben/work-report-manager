import { prisma } from "@/config/prisma";



// get all messages



import { NextResponse, NextRequest } from "next/server";



// get request with an id

type Idtype = {
    id: string
}

export async function DELETE(req: NextRequest, { params }: { params: Idtype }, res: NextResponse) {

    const { id } = params;
    // console.log("REport ",id);
    try {
        const REportsAvailable = await prisma.message.findUnique({
            where: {
                id,
            }
        });
        console.log("MEssage available", REportsAvailable);


        if (REportsAvailable) {
            const deleteReport = await prisma.message.delete({
                where: {
                    id: id
                }
            });
            console.log("REports deleted", deleteReport);
            await prisma.activity.create({
                data: {
                    authorId: REportsAvailable.authorId,
                    content: `message deleted for ${REportsAvailable.id}`,
                }
            })


            return NextResponse.json({ message: "message deleted" });
        } else {
            return NextResponse.json({ error: "message not found" });
        }




    } catch (error) {
        return NextResponse.json({ error: "error in deleting message" });
    }

}


// get user by pram id


export async function GET(req: NextRequest, { params }: { params: Idtype }, res: NextResponse) {

    const { id } = params;
    console.log("userid ", id);
    try {
        const UserAvailable = await prisma.message.findUnique({
            where: {
                id,
            }
        });
        console.log("user available", UserAvailable);

        return NextResponse.json({ UserAvailable });
    } catch (error) {
        return NextResponse.json({ error: "error in getting message" });
    }
}


