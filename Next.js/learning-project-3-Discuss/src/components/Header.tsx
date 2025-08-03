import React from "react";
import { Input } from "./ui/input";
import AuthHeader from "./auth-Header";


const HeaderPage = async () => {

    return (
        <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg shadow-md px-8 py-4 flex items-center justify-between animate-fadeIn z-[100]">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <h1 className="text-3xl font-extrabold text-gray-700 tracking-wide">
                    Discuss
                </h1>
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-lg">
                <Input
                    type="text"
                    placeholder="Search posts..."
                    className="w-full px-4 py-2 text-gray-600 bg-white/20 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
            </div>

            {/* User */}
            <div className="flex gap-4 items-center">
                <AuthHeader />
            </div>

        </header>
    );
};

export default HeaderPage;
