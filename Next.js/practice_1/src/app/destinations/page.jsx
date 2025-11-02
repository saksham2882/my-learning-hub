"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const destinations = ["Seoul", "Tokyo", "Paris"];
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center gap-8 px-4">
      <h1 className="font-extrabold text-3xl md:text-4xl text-center mt-6">
        Choose Your Destination
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-3xl">
        {destinations.map((des, idx) => (
          <div
            key={idx}
            onClick={() => router.push(`/destinations/${des}`)}
            className="bg-yellow-100 text-green-700 font-bold text-xl md:text-2xl flex items-center justify-center rounded-2xl h-[120px] hover:opacity-80 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-md shadow-yellow-500/30"
          >
            {des}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
