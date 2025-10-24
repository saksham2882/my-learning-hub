import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {

    // Access query parameter
    let query = request.nextUrl.searchParams.get("q");

    return NextResponse.json({
        query,
        message : "This is query parameter request"
    })
}