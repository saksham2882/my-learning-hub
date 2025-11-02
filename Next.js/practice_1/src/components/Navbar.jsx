"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full h-[70px] bg-white shadow-md fixed top-0 left-0 z-50 flex justify-between items-center px-6 md:px-10">
      {/* ---------- Logo ----------- */}
      <div className="text-black font-extrabold text-2xl tracking-wide">
        🌐 Travel Guide
      </div>

      {/* ---------------- Desktop Menu ------------------ */}
      <ul className="hidden md:flex justify-center items-center gap-8 text-lg font-medium">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`transition-colors duration-200 ${
              pathname === link.path
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-3xl text-gray-700 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenuAlt3 />}
      </div>

      {/* ------------- Mobile Menu ------------- */}
      {open && (
        <div className="absolute top-[70px] left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-lg md:hidden animate-slideDown">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-lg font-medium transition-all duration-200 ${
                pathname === link.path
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;