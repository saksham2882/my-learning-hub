"use client";

import { useParams } from "next/navigation";

const page = () => {
  const { city } = useParams();

  return (
    <div className="text-white mt-[100px] w-[50%] border border-yellow-700 p-4">
      Parallel Route
      <hr />
      <div className="p-4 text-yellow-100">"{city}" is My Favorite City.</div>
    </div>
  );
};
export default page;
