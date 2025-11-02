import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import connectDB from "./db"
import User from "@/model/user.model"
import bcrypt from "bcryptjs"
import Google from "next-auth/providers/google"

const authOptions: NextAuthOptions = {
    // List all authentication providers here
    // Example: GoogleProvider(), GitHubProvider(), CredentialsProvider() -> for email, etc.
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                const email = credentials?.email
                const password = credentials?.password

                if (!email || !password) {
                    throw new Error("Email or Password is not found")
                }
                await connectDB()

                const user = await User.findOne({ email })
                if (!user) {
                    throw new Error("User not found")
                }

                const isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch) {
                    throw new Error("Incorrect Password")
                }

                // Return user details; NextAuth will include this data in the JWT token (token generated as this function call)
                return {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    image: user.image
                }
            }
        }),

        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],  

    // Callbacks are asynchronous functions that let you control what happens during different parts of the authentication flow.
    // Example: controlling what data is saved in the token or session.
    callbacks: {
        // if user not registered yet and we try signin using google then first register user using google account details
        async signIn({account, user}) {
            if(account?.provider == "google"){
                await connectDB()

                let existUser = await User.findOne({email: user?.email})
                if(!existUser){
                    existUser = await User.create({
                        name: user.name,
                        email: user?.email
                    })
                }

                user.id = existUser._id as string
            }
            return true
        },

        // This JWT callback stores the user data returned by the provider into the JWT token
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.name = user.name
                token.email = user.email
                token.image = user.image
            }

            return token
        },

        // This session callback adds user details from the JWT token into the Session object.
        // In NextAuth, the token is stored in cookies, but we access the session on the frontend instead of the token.
        session({ session, token }) {
            if (session.user) {
                // TypeScript note: 'id' is not part of the default Session interface.
                // You can extend the Session type to include 'id' to avoid errors.
                session.user.id = token.id as string
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.image as string
            }

            return session
        }
    },

    // Configure how sessions are managed
    // Example: "jwt" for stateless sessions or "database" for persistent sessions.
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60 * 1000     // session expiry in 30 days (write in millisecond)
    },

    // Use this when you want your own UI instead of the default NextAuth screens.
    // Example: login, signOut, verifyRequest, error, newUser pages.
    pages: {
        signIn: '/login',
        error: '/login'
    },

    // Used to encrypt and sign tokens/cookies for security
    // Must be a strong, unique secret string
    secret: process.env.NEXT_AUTH_SECRET
}

export default authOptions