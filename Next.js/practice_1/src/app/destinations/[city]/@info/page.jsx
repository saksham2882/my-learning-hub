"use client";

import { useParams } from "next/navigation";

const Page = () => {
  const { city } = useParams();

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-md border-2 border-yellow-500 rounded-2xl p-6 shadow-lg shadow-yellow-900/40 text-center text-white">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
          Parallel Route
        </h1>

        <hr className="border-yellow-600 mb-4" />
        
        <p className="text-yellow-100 text-lg md:text-xl italic">
          “{city}” is my favorite city.
        </p>
      </div>
    </div>
  );
};

export default Page
