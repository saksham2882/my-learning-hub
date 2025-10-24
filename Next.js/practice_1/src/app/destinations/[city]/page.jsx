"use client"

import { useParams } from "next/navigation"
import seoulImg from "@/assets/seoul.jpg"
import tokyoImg from "@/assets/tokyo.jpg"
import parisImg from "@/assets/paris.jpg"
import Image from "next/image"

const page = ({params}) => {
    const {city} = useParams()
  return (
    <div className="text-white mt-[100px] w-[50%] border border-yellow-700">
        Welcome to "{city}"
        
        {
            city == "Seoul" && <Image src={seoulImg} width={400} height={400} alt="Seoul"/>
        }
        {
            city == "Tokyo" && <Image src={tokyoImg} width={400} height={400} alt="Tokyo"/>
        }
        {
            city == "Paris" && <Image src={parisImg} width={400} height={400} alt="Paris"/>
        }
    </div>
  )
}
export default page 