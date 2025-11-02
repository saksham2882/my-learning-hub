import { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            id: string,      // include id in Session object
        } 
        & DefaultSession['user']
    }
}

export {}