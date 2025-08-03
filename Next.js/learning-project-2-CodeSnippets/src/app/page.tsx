import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

// export const dynamic = "force-dynamic"   // disabling the caching feature  ->  dynamic route
// export const revalidate = 0;             // revalidate every 0 seconds -> disabling the caching feature  ->  dynamic route

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Home
      </h1>

      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Snippets</h2>
        <Link href="/snippet/new">
          <Button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
            New
          </Button>
        </Link>
      </div>

        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="flex justify-between p-4 mt-4 border rounded-lg shadow-sm bg-gray-100 hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {snippet.title}
            </h3>
            
            <Link href={`/snippet/${snippet.id}`}>
              <Button variant={'link'} className="hover:bg-slate-200 text-lg">
                view
              </Button>
            </Link>
          </div>
        ))}
      </div>
  );
}