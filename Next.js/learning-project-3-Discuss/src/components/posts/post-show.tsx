import { prisma } from "@/lib";
import { notFound } from "next/navigation";
import React from 'react'

type PostShowProps = {
    postId: string
}

const PostShow : React.FC<PostShowProps> = async ({postId}) => {
    const post = await prisma.post.findFirst({
        where: {
            id: postId
        }
    });

    if (!post) notFound();

    return (
        <div>
            <h1>{ post.title }</h1>
            <p>{ post.content }</p>
        </div>
    )
}

export default PostShow
