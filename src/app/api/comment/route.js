import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

 export const GET=async(req,{params})=>{
//    const {slug}=params;
const {searchParams}=new URL(req.url)
const postSlug=searchParams.get("slug")
console.log(postSlug);
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