import authOptions from "@/lib/auth";
import uploadOnCloudinary from "@/lib/cloudinary";
import connectDB from "@/lib/db";
import User from "@/model/user.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

/*
    Function: POST
    Route Type: API Route (Server Action)
    Purpose: Handles user profile update requests — mainly name and profile image.
    Why use this:
      - To let authenticated users update their profile info.
      - Uses Cloudinary for image uploads and MongoDB for storing updated data.
*/
export async function POST(req: NextRequest) {
    try {
        // Connect to MongoDB database before performing any user operations
        await connectDB()

        // Get the currently logged-in user's session from NextAuth.
        // Why: Only authenticated users should be allowed to update their profile.
        const session = await getServerSession(authOptions)

        // If the session or required user details are missing, return an error response
        if (!session || !session.user.email || !session.user.id) {
            return NextResponse.json(
                { message: "User does not have session" },
                { status: 400 }
            )
        }

        // Get the form data sent from the frontend.
        // The frontend sends `name` and `file` (image) in a FormData object.
        const formData = await req.formData()
        const name = formData.get("name") as string
        const file = formData.get("file") as Blob | null

        // If the user already has an image, keep it as default
        // The nullish coalescing operator (??) assigns right side only if left side is null/undefined
        let imageUrl;

        // If the user uploaded a new file, upload it to Cloudinary.
        // Cloudinary returns a secure URL that replaces the old image.
        if (file) {
            imageUrl = await uploadOnCloudinary(file)
        }

        /*
            Update user details in MongoDB:
              - Find the user by their session ID.
              - Update their name and image fields.
              - Return the updated user document.
        */
        const user = await User.findByIdAndUpdate(session.user.id, {
            name, image: imageUrl
        }, {
            new: true    // returns the updated document instead of the old one
        })

        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 400 }
            )
        }

        return NextResponse.json(
            user,
            { status: 200 }
        )
    }
    catch (error) {
        return NextResponse.json(
            { message: `Edit error: ${error}` },
            { status: 500 }
        )
    }
}