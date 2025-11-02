import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap"
})

export const metadata = {
  title: "Travel Guide",
  description: "A simple Next.js practice project for exploring destinations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} min-h-screen bg-black text-white overflow-x-hidden`}
      >
        <Navbar />
        <main className="pt-20 flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
