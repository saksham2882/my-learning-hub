import React from "react";
import foodImg from "public/food.jpg";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 -z-10 opacity-65">
                <Image
                    src={foodImg}
                    fill
                    alt="Food Image"
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className="flex items-center justify-center py-64">
                <h1 className="text-6xl font-bold text-white">Welcome to Food Factory</h1>
            </div>
        </div>
    );
};

export default Hero;
