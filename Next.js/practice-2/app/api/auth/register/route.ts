import connectDB from "@/lib/db";
import User from "@/model/user.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { name, email, password } = await request.json()

        // connect database
        await connectDB()

        // if user already exist
        const existUser = await User.findOne({ email })
        if (existUser) {
            return NextResponse.json(
                { message: "User already exist!" },
                { status: 400 }
            )
        }
        if (password.length < 6) {
            return NextResponse.json(
                { message: "Password must be at least 6 characters!" },
                { status: 400 }
            )
        }

        // password hashing
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name, email,
            password: hashedPassword
        })

        return NextResponse.json(
            user,
            { status: 201 }
        )

    } catch (error) {
        return NextResponse.json(
            { message: `Register error: ${error}` },
            { status: 500 }
        )
    }
}