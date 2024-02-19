import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get("page")
    const cat = searchParams.get("cat")
    const catSlug = cat ? cat : undefined;

    const POST_PER_PAGE = 4;
    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            //    catSlug:"style"
            ...(catSlug && { catSlug: catSlug })
        }
    }
    try {
        const [posts, count] = await prisma.$transaction([
            prisma.Post.findMany(query),
            prisma.Post.count({ where: query.where })
        ])
        return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }))
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }, { status: 500 }))
    }
}


export const POST = async (req) => {
    const sesstion = await getAuthSession()
    if (!sesstion) {
        return new NextResponse(JSON.stringify({
            message: "Not Authenticated"
        }, {
            status: 200
        }))
    }
    try {
        const body = await req.json()
        const post = await prisma.Post.create({
            data: { ...body, userEmail: sesstion.user.email }
        })
        return new NextResponse(JSON.stringify({ post }, { status: 200 }))
    } catch (error) {

        return NextResponse(JSON.stringify({ message: "Something went wrong" }, { status: 500 }))
    }
}