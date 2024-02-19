import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {

    try {
        const topPosts = await prisma.Post.findMany({
            orderBy: {
                views: 'desc' // Order by views in descending order
            },
            take: 5 // Limit the result to the top 5 posts
        });
        return new NextResponse(JSON.stringify({ topPosts }, { status: 200 }))
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }, { status: 500 }))
    }
}


