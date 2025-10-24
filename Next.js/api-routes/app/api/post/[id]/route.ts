import { NextRequest, NextResponse } from "next/server";

interface paramsType {
    params: Promise<{ id: number }>
}

export async function GET(request: NextRequest, { params }: paramsType) {
    const { id } = await params

    return NextResponse.json({
        postId: id,
        message: "This is Dynamic Route"
    })
}