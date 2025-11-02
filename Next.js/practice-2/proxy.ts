// From Next.js 16 onwards, middleware behaves like a proxy layer.
// The middleware file convention is deprecated and has been renamed to proxy

// Middleware in Next.js 16 works like a proxy between the client and the route.
// It intercepts every request before it reaches the API or page, allowing you to handle tasks like authentication, redirection, or logging.
// Middleware run in every request.


import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// proxy intercepts requests before they reach the route handler and can control access (like auth checks).
export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl

    // Define routes that don't require authentication
    const publicRoutes = [
        "/login",
        "/register",
        "/api/auth",
        "/favicon.ico",
        "_next"
    ]

    if (publicRoutes.some(path => pathname.startsWith(path))) {
        // Allow public routes to continue without authentication
        return NextResponse.next()
    }
    else {
        // Protected routes: check if the user has a valid JWT token
        const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET })    // get token from next-auth

        if (!token) {
            // If no token found, redirect user to login page
            // Also store the original path the user tried to access in "callbackURL"
            // so that after login, they can be redirected back to it

            const loginURL = new URL("/login", req.url)
            // console.log("Request URL: ", req.url)
            // console.log("Login URL: ", loginURL)

            loginURL.searchParams.set("callbackURL", req.url)
            return NextResponse.redirect(loginURL)
        }

        // Token found, allow access to the protected route
        return NextResponse.next()
    }
}

// Apply this proxy (middleware) to all routes except API routes, static files, images, and node_modules
export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico|node_modules).*)"
}


// -------------- flow ------------
//
//           request comes
//                |
//            check path
//                |
//    if request is for public path (route)    --->    then pass request
//                |
//          else private route                 --->    then redirect to public (unprotected path)