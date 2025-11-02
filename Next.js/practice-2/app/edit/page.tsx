'use client'
import { userDataContext } from "@/context/UserContext"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useContext, useEffect, useRef, useState } from "react"
import { CgProfile } from "react-icons/cg"
import { IoMdArrowRoundBack } from "react-icons/io";

const Edit = () => {
    const data = useContext(userDataContext)
    const [name, setName] = useState("")
    const [frontendImage, setFrontendImage] = useState("")
    const [backendImage, setBackendImage] = useState<File | null>(null)
    const imageInput = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e)
        const files = e.target.files
        if (!files || files.length == 0) {
            return
        }

        const file = files[0]
        setBackendImage(file)
        setFrontendImage(URL.createObjectURL(file))
    }

    const handleEditSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const formData = new FormData()

            formData.append("name", name)
            if (backendImage) {
                formData.append('file', backendImage)
            }

            const res = await axios.post('/api/edit', formData)
            data?.setUser(res.data)
            // console.log(res)
            router.push("/")

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (data) {
            setName(data?.user?.name as string)
            setFrontendImage(data.user?.image as string)
        }
    }, [data])

    return (
        <div className="flex justify-center items-center min-h-screen bg-black text-white px-4 flex-col">
            <div className="w-full max-w-md border-2 border-yellow-200 rounded-2xl p-8 shadow-md shadow-yellow-900">
                <IoMdArrowRoundBack
                    size={27}
                    color="white"
                    className="absolute left-5 top-5 cursor-pointer m-1 rounded-full p-1 transition-all duration-200 hover:bg-yellow-900 hover:scale-110 active:scale-95 shadow-xs shadow-yellow-500"
                    onClick={() => router.push("/")}
                />
                <h1 className="text-2xl font-semibold text-center mb-4">
                    Edit Profile
                </h1>

                <form className="space-y-2 flex flex-col w-full items-center" onSubmit={handleEditSubmit}>
                    <div
                        className="w-[150px] h-[150px] rounded-full border-2 flex justify-center items-center border-yellow-200 transition-all hover:border-blue-500 text-white hover:text-blue-500 cursor-pointer overflow-hidden relative"
                        onClick={() => imageInput.current?.click()}
                        onChange={handleImage}
                    >
                        <input type="file" accept="image/*" hidden ref={imageInput} />

                        {frontendImage ? (
                            <Image
                                src={frontendImage}
                                fill
                                alt="image"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 150px"
                                className="object-cover"
                            />
                        ) : <CgProfile size={22} />}
                    </div>

                    <div className="w-full rounded-xl">
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="w-full border-b border-yellow-800 py-2 px-4 bg-gray-900 text-white outline-none placeholder-gray-400 rounded-sm mb-6"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                    <button
                        className="w-full py-2 px-4 bg-yellow-200 text-black font-bold rounded-lg shadow-md shadow-yellow-900 hover:bg-yellow-500 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? "Saving....." : "Save"}
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Edit