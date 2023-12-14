import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {
const {slug}=params;
console.log('====================================');
console.log("This is Params %s",slug);
console.log('====================================');

    try {
         const post=await prisma.Post.findUnique({
            where:{postSlug:slug},
            include:{user:true}
         })
         

       return new NextResponse(JSON.stringify({post},{status:200}))
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }, { status: 500 }))
    }
}