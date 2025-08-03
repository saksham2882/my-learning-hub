'use client'
import { useSession } from 'next-auth/react';
import React from 'react'
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { LogOut } from "lucide-react"
import { Separator } from "./ui/separator";
import { signIn } from '@/actions/sign-in';
import { signOut } from '@/actions/sign-out';

const AuthHeader = () => {
    const session = useSession();   // session for client side

    // to avoid delay
    if (session.status === "loading") return null;

    let authContent: React.ReactNode;

    if (session?.data?.user) {
        authContent = (
            <Popover>
                <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer border-4 border-gray-400 hover:border-blue-500 transition duration-300 shadow-md">
                        <AvatarImage src={session.data.user.image || ""} />
                        <AvatarFallback className="bg-blue-500 text-white font-bold">
                            {session.data.user.name?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent className="mt-3 bg-gray-800 text-white p-5 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-semibold">{session.data.user.name}</p>
                        <p className="text-sm text-gray-300">{session.data.user.email}</p>
                        <Separator className="my-2 opacity-35" />
                        <form action={signOut} className="w-full mt-4">
                            <Button className="w-full flex items-center gap-2 px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md transition duration-300">
                                <LogOut className="w-5 h-5" /> Sign out
                            </Button>
                        </form>
                    </div>
                </PopoverContent>
            </Popover>
        )
    } else {
        authContent = (
            <>
                <form action={signIn}>
                    <Button className="px-5 py-2 border border-gray-200 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-600 shadow-lg">
                        Sign in
                    </Button>
                </form>
                <form action={signOut}>
                    <Button className="px-5 py-2 bg-white text-blue-600 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-200">
                        Sign up
                    </Button>
                </form>
            </>
        )
    }

    return authContent;
}

export default AuthHeader
