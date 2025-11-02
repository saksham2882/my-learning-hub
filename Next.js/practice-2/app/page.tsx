'use client'

import { userDataContext } from "@/context/UserContext";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation"
import { useContext, useState } from "react";
import { HiPencil } from "react-icons/hi2";

const Page = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const data = useContext(userDataContext)

  const handleSignOut = async () => {
    setLoading(true)
    try {
      await signOut()
    } catch (error) {
      alert('Failed to Logout')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white px-4 flex-col">

      {data && (
        <div className="w-full max-w-md border-2 border-yellow-200 rounded-2xl p-8 shadow-lg text-center relative flex flex-col items-center">
          <HiPencil
            size={27}
            color="white"
            className="absolute right-5 top-5 cursor-pointer m-1 rounded-full p-1 transition-all duration-200 hover:bg-yellow-900 hover:scale-110 active:scale-95 shadow-xs shadow-yellow-500"
            onClick={() => router.push("/edit")}
          />

          {data.user?.image && (
            <div className="relative w-[150px] h-[150px] rounded-full border-2 border-yellow-200 overflow-hidden">
              <Image
                src={data.user?.image}
                fill alt="userImage"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 150px"
                className="object-cover"
              />
            </div>
          )}

          <h1 className="text-2xl font-semibold my-6">Welcome, {data.user?.name}</h1>

          <button
            className="w-full py-2 px-4 bg-yellow-200 text-black font-bold rounded-lg shadow-md shadow-yellow-900 hover:bg-yellow-500 hover:scale-105 active:scale-95 transition-all cursor-pointer "
            onClick={handleSignOut}
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Out"}
          </button>
        </div>
      )}

      {/* -------------- When user not logging ---------------- */}
      {!data && (
        <div className="rounded-xl p-10 flex justify-center items-center">
          Loading.....
        </div>
      )}
    </div>
  )
}
export default Page