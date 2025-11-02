import authOptions from "@/lib/auth";
import connectDB from "@/lib/db";
import User from "@/model/user.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


/*
    Function: GET
    Route Type: API Route (Server Action)
    Purpose: Fetch the currently logged-in user's full profile details.
    Why use this:
      - To securely get user data after authentication.
      - Useful for showing profile info or pre-filling edit profile forms.
      - Data retrieved here can be stored in a centralized state (like Context API or Redux) so that multiple components can access it without repeatedly calling the API.
*/
export async function GET(req: NextRequest) {
    try {
        // Connect to MongoDB database before performing any user operations
        await connectDB()

        // Get the currently logged-in user's session from NextAuth.
        // Why: Only authenticated users should be allowed to update their profile.
        const session = await getServerSession(authOptions)

        // If there is no active session or missing user details, deny access
        if (!session || !session.user.email || !session.user.id) {
            return NextResponse.json(
                { message: "User does not have session" },
                { status: 400 }
            )
        }

        // Fetch user details from MongoDB using the session's user ID.
        // `.select("-password")` ensures we exclude the password for security.
        const user = await User.findById(session.user.id).select("-password")
        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 400 }
            )
        }

        /*
            Return the user details if found.
            On the frontend:
              - This response can be stored in a centralized data management system like Context API or Redux.
              - Why:
                  → Avoids multiple API calls for the same user data.
                  → Keeps user info (like name, email, image) globally accessible in any component.
              - Example Flow:
                  1. Call this endpoint once after login.
                  2. Store user data in Context/Redux.
                  3. Access it across profile pages, dashboards, or navbar without re-fetching.
        */
        return NextResponse.json(
            user,
            { status: 200 }
        )

    } catch (error) {
        return NextResponse.json(
            { message: `Get user error: ${error}` },
            { status: 500 }
        )
    }
}