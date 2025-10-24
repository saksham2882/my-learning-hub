"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()

  return (
    <div className="w-full h-[80px] bg-white flex justify-between items-center px-[20px] fixed top-0">
      <div className="text-black font-bold text-2xl">🌐 Travel Guide</div>

      <div>
        <ul className="flex justify-center items-center gap-[10px]">
          <Link
            href={"/"}
            className={pathname == "/" ? "text-blue-500" : "text-black"}
          >
            <li>Home </li>
          </Link>

          <Link
            href={"/destinations"}
            className={pathname == "/destinations" ? "text-blue-500" : "text-black"}
          >
            <li>Destinations</li>
          </Link>

          <Link
            href={"/contact"}
            className={pathname == "/contact" ? "text-blue-500" : "text-black"}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
export default Navbar