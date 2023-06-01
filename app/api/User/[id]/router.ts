



import { prisma  } from "../../../../components/Prisma/Prisma";

import { NextRequest,NextResponse } from "next/server";



// delete users

export default function handler(req: NextRequest, res: NextResponse) {

    const id = req.query.id;
    const deleteUser=prisma.user.delete({
        where:{
            id: id
        }
    });

}