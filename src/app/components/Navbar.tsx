'use client';
import Link from "next/link"; // Import Link from Next.js
import { useState } from "react";

export default function Navbar() {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const handleHover = (index: number | null): void => {
        setHoverIndex(index);
    };

    return (
        <nav
            className="fixed top-4 left-4 right-4 sm:left-[calc((100vw/12)*8)] sm:w-[calc((100vw/12)*4)] z-50 rounded-t-full"
        >
            <ul className="relative flex flex-row sm:flex-row justify-around sm:justify-center font-neuehaasunica text-h4mono border border-black rounded-full py-2.5 bg-background md:right-10 lg:right-10">
                {/* Pill Shape */}
                <div
                    className="absolute top-0 bottom-0 bg-black rounded-full transition-all duration-300 ease-in-out"
                    style={{
                        width: "calc(100% / 3)",
                        left: hoverIndex !== null ? `calc((100% / 3) * ${hoverIndex})` : "0",
                    }}
                ></div>

                {["WORK", "ABOUT", "RESUME"].map((item, index) => (
                    <li
                        key={item}
                        className="relative z-10 flex-grow text-center"
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleHover(null)}
                    >
                        <Link
                            href={item === "WORK" ? "/" : `/${item.toLowerCase()}`}
                            className={`block py-1 w-full text-center transition-colors duration-300 ease-in-out ${
                                hoverIndex === index || (hoverIndex === null && index === 0)
                                    ? "text-white"
                                    : "text-black"
                            }`}
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
