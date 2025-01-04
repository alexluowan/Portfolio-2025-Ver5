"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = ["WORK", "ABOUT", "RESUME"];

export default function MagicPillNav() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [tempIndex, setTempIndex] = useState<number | null>(null);
    const [pillStyles, setPillStyles] = useState<{ left: string; width: string }>({
        left: "0px",
        width: "0px",
    });
    const navLinksRef = useRef<HTMLAnchorElement[]>([]);

    const currentIndex = tempIndex ?? activeIndex;

    // Dynamically update the pill's position and width based on the hovered or active link
    useEffect(() => {
        const currentLink = navLinksRef.current[currentIndex];
        if (currentLink) {
            const { offsetLeft, offsetWidth } = currentLink;
            setPillStyles({
                left: `${offsetLeft}px`,
                width: `${offsetWidth}px`,
            });
        }
    }, [currentIndex]);

    return (
        <div className="w-full flex justify-center">
            <nav
                className="
          relative
          rounded-full
          px-2
          py-2
          inline-flex
          space-x-2
          border
          border-2
          border-black
        "
            >
                {/* Moving black pill */}
                <span
                    className="
            absolute
            top-1/2
            left-0
            -translate-y-1/2
            block
            h-10
            rounded-full
            bg-black
            transition-all
            duration-300
            ease-out
            z-0
          "
                    style={{
                        left: pillStyles.left,
                        width: pillStyles.width,
                    }}
                />

                {NAV_ITEMS.map((item, index) => (
                    <NavItem
                        key={item}
                        item={item}
                        index={index}
                        navLinksRef={navLinksRef}
                        isActive={index === activeIndex && tempIndex === null}
                        isHovered={index === tempIndex}
                        onHover={() => setTempIndex(index)}
                        onHoverOut={() => setTempIndex(null)}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </nav>
        </div>
    );
}

// Extracted NavItem Component
function NavItem({
                     item,
                     index,
                     navLinksRef,
                     isActive,
                     isHovered,
                     onHover,
                     onHoverOut,
                     onClick,
                 }: {
    item: string;
    index: number;
    navLinksRef: React.MutableRefObject<HTMLAnchorElement[]>;
    isActive: boolean;
    isHovered: boolean;
    onHover: () => void;
    onHoverOut: () => void;
    onClick: () => void;
}) {
    return (
        <Link
            href="#"
            ref={(el) => {
                if (el) navLinksRef.current[index] = el;
            }}
            onMouseEnter={onHover}
            onMouseLeave={onHoverOut}
            onClick={onClick}
            className={`
        relative
        z-10
        text-center
        px-2
        py-2
        font-neuehaasunica
        text-h4mono
        transition
        duration-300
        ease-out
        rounded-full
      `}
            style={{
                // If hovered or active, text is white (because the pill is behind it); otherwise, it's black
                color: isHovered || isActive ? "#fff" : "#000",
            }}
        >
            {item}
        </Link>
    );
}