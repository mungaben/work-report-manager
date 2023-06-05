



import { prisma  } from "../../../../components/Prisma/Prisma";

import { NextRequest,NextResponse } from "next/server";



// delete users
type Idtype={
    id:string
}

export async function DELETE(req: NextRequest,{params}:{params:Idtype}, res: NextResponse) {

    const {id}= params;
    console.log("userid ",id);
    try{
        const UserAvailable= await prisma.user.findUnique({
            where:{
                id,
            }
        });
        console.log("user available",UserAvailable);
        
        if(UserAvailable){
        const deleteUser= await prisma.user.deleteMany({
            where:{
                id:id
            }
        });
        console.log("user deleted",deleteUser);
        
        return NextResponse.json({message: "user deleted"});
    }else{
        return NextResponse.json({error: "user not found"});
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
        const UserAvailable= await prisma.user.findUnique({
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

// post request



// update a single user

