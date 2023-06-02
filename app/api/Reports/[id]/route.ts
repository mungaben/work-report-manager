

import { prisma } from "../../../../components/Prisma/Prisma";
import { NextResponse,NextRequest } from "next/server";



// get request with an id

type Idtype={
    id:string
}

export async function DELETE(req: NextRequest,{params}:{params:Idtype}, res: NextResponse) {

    const {id}= params;
    console.log("REport ",id);
    try{
        const REportsAvailable= await prisma.report.findUnique({
            where:{
                id,
            }
        });
        console.log("Reports available",REportsAvailable);
        
        
        if(REportsAvailable){
        const deleteReport= await prisma.report.delete({
            where:{
                id:id
            }
        });
        console.log("REports deleted",deleteReport);
        
        return NextResponse.json({message: "Reports deleted"});
    }else{
        return NextResponse.json({error: "report not found"});
    }

  
    

    }catch(error){
        return NextResponse.json({error: "error in deleting user"});
    }

}


// get user by pram id


export async function GET(req: NextRequest,{params}:{params:Idtype}, res: NextResponse) {

    const {id}= params;
    console.log("userid ",id);
    try{
        const UserAvailable= await prisma.report.findUnique({
            where:{
                id,
            }
        });
        console.log("user available",UserAvailable);
        
        return NextResponse.json({UserAvailable});
    }catch(error){
        return NextResponse.json({error: "error in getting user"});
    }
}


