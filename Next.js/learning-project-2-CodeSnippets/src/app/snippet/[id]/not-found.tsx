import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
    return (
        <div className="p-10 flex flex-col items-center justify-center bg-gray-100 text-center">
            <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-6">
                Page Not Found
            </h2>
            <p className="text-gray-500 mb-8">
                Oops! The page you are looking for does not exist.
            </p>
            <Link href="/" className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition">
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;