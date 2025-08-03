import Link from "next/link";

const Header = () => {
    return (
        <div className="absolute z-10 text-white w-full">
            <nav className="container flex items-center justify-between mx-auto border p-4 h-14 mt-4">
                <Link href="/">
                    <h1 className="font-bold">Home Page</h1>
                </Link>
                <div className="flex border">
                    <Link href="/performance">
                        <button className="border px-6 bg-red-400">Performance</button>
                    </Link>
                    <Link href="/reliability" className="px-6">
                        Reliability
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
