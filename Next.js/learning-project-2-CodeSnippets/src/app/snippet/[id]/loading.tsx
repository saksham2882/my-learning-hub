import React from "react";

const LoadingPage = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <div className="h-6 bg-gray-300 rounded-md animate-pulse w-1/3"></div>
                <div className="flex items-center gap-2">
                    <div className="h-10 w-20 bg-gray-300 rounded-md animate-pulse"></div>
                    <div className="h-10 w-20 bg-gray-300 rounded-md animate-pulse"></div>
                </div>
            </div>
            <div className="h-40 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-300 rounded-md animate-pulse mx-auto"></div>
        </div>
    );
};

export default LoadingPage;
