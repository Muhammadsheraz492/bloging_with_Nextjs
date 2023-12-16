import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

 export const GET=async(req,{params})=>{
//    const {slug}=params;
const {searchParams}=new URL(req.url)
const postSlug=searchParams.get("slug")
    try { 
      const comment=  await prisma.Comment.findMany({
         where:{comentSlug:postSlug},
         include:{user:true}
        })
        return new NextResponse(JSON.stringify({comment},{status:200}))
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({message:"Something went wrong"},{status:500}))
        
    }
 }

export const POST = async (req) => {
    const sesstion= await getAuthSession()
    if (!sesstion) {
        return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }, { status: 401 }))

    }

    try {
        const body=await req.json()
        // console.log("This is user email:"+sesstion.data.userEmail);
        const comment=await prisma.Comment.create({
          data:{...body,userEmail:sesstion.user.email}
        })
        return new NextResponse(JSON.stringify({ comment }, { status: 200 }))
        
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }, { status: 500 }))
    
    }
}