"use client";

import { useRouter } from "next/navigation";

const page = () => {
  const destination = ["Seoul", "Tokyo", "Paris"];
  const router = useRouter();

  return (
    <div className="flex justify-center items-center text-white h-full flex-col gap-4">
      <div className="font-bold text-2xl">Choose Your Destination</div>

      <div className="flex flex-col gap-4">
        {destination.map((des, idx) => (
          <div
            key={idx}
            className="text-green-700 font-bold text-2xl flex items-center justify-center rounded-2xl w-[200px] h-[100px] bg-yellow-100 hover:opacity-[0.5] transition-all cursor-pointer"
            onClick={() => router.push(`/destinations/${des}`)}
          >
            {des}
          </div>
        ))}
      </div>
    </div>
  );
};
export default page;
