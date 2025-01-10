'use client'
import { useState } from "react";

export default function Navbar() {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null); // Allow hoverIndex to be null for default state

    const handleHover = (index: number | null): void => {
        setHoverIndex(index);
    };

    return (
        <nav className="col-start-9 col-span-4 row-start-1">
            <ul className="relative flex flex-row justify-center font-neuehaasunica text-h4mono bg-background border border-black rounded-full py-2.5">
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
                        <a
                            href={`/${item.toLowerCase()}`}
                            className={`block py-1 w-full text-center transition-colors duration-300 ease-in-out ${
                                hoverIndex === index || (hoverIndex === null && index === 0) ? "text-white" : "text-black"
                            }`}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

    );
}
