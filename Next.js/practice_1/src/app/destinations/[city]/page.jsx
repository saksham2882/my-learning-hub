"use client";

import { useParams } from "next/navigation";
import seoulImg from "@/assets/seoul.jpg";
import tokyoImg from "@/assets/tokyo.jpg";
import parisImg from "@/assets/paris.jpg";
import Image from "next/image";

const Page = () => {
  const { city } = useParams();

  // Image selection based on city
  const cityImages = {
    Seoul: seoulImg,
    Tokyo: tokyoImg,
    Paris: parisImg,
  };

  const imageSrc = city ? cityImages[city] : null;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
      <div className="w-full max-w-md border-2 border-yellow-600 rounded-2xl p-6 shadow-lg shadow-yellow-900/40 text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
          Welcome to “{city}”
        </h1>

        {imageSrc ? (
          <div className="w-full flex justify-center">
            <Image
              src={imageSrc}
              alt={city}
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-auto md:w-[400px]"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        ) : (
          <p className="text-yellow-200 mt-4">No image found for this city.</p>
        )}
      </div>
    </div>
  );
};

export default Page