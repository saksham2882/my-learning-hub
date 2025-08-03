import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github"
import { prisma } from "@/lib"

if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    throw new Error("Please set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in your environment variables")
}

export const {handlers: {GET, POST}, auth, signIn, signOut} = NextAuth({
    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ user, session }) {
            if (session && user) {
                session.user.id = user.id;
            }
            return session;
        }
    }
})