'use client'
import axios from "axios"
import { useSession } from "next-auth/react"
import React, { useEffect, useState } from "react"

type userContextType = {
    user: userType | undefined | null,
    setUser: (user: userType) => void
}

type userType = {
    id: string,
    name: string,
    email: string,
    image?: string
}

export const userDataContext = React.createContext<userContextType | undefined>(undefined)

const UserContext = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<userType | null>()
    const session = useSession()

    const data = {
        user, setUser
    }

    useEffect(() => {
        async function getUser() {
            try {
                const res = await axios.get("/api/user")
                // console.log("Context data: ", res)
                setUser(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [session])


    return (
        <userDataContext.Provider value={data}>
            {children}
        </userDataContext.Provider>
    )
}

export default UserContext