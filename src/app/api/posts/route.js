import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const {searchParams}=new URL(req.url)
    const page=searchParams.get("page")
    const cat=searchParams.get("cat")
    const catSlug = cat ? cat : undefined;
    console.log('====================================');
    console.log(catSlug);
    console.log(page);
    console.log('====================================');
    const POST_PER_PAGE=4;
    const query={
        take:POST_PER_PAGE,
        skip:POST_PER_PAGE*(page-1),
        where:{
        //    catSlug:"style"
            ...(catSlug && { catSlug: catSlug })
        }
       }
    try {
       const [posts,count]=await prisma.$transaction([
        prisma.Post.findMany(query),
        prisma.Post.count({where:query.where})
       ])
       return new NextResponse(JSON.stringify({posts,count},{status:200}))
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }, { status: 500 }))
    }
}