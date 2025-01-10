"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const handleHover = (index: number | null): void => {
        setHoverIndex(index);

        // Play hover sound
        // const hoverSound = new Audio("/sounds/hover.mp3");
        // hoverSound.play().catch((error) => {
        //     console.warn("Hover sound playback failed:", error);
        // });
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
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        {item === "RESUME" ? (
                            // External link for RESUME
                            <a
                                href="https://www.google.ca/" // Replace with your actual resume link
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block py-1 w-full text-center transition-colors duration-300 ease-in-out ${
                                    hoverIndex === index ? "text-white" : "text-black"
                                }`}
                            >
                                {item}
                            </a>
                        ) : (
                            <Link
                                href={
                                    item === "WORK"
                                        ? "/" // Root path for "WORK"
                                        : `/projects/${item.toLowerCase()}` // Nested path for other items
                                }
                                className={`block py-1 w-full text-center transition-colors duration-300 ease-in-out ${
                                    hoverIndex === index || (hoverIndex === null && index === 0)
                                        ? "text-white"
                                        : "text-black"
                                }`}
                            >
                                {item}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
