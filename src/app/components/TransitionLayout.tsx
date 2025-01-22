// app/TransitionWrapper.tsx
"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// We'll create a single variants object for demonstration.
// In practice, you could define a separate object for exit vs. enter
// if you need different animations on each route.
const variants = {
    initial: {
        // New page starts just below screen
        y: "100%",
        scale: 1,
        rotateX: 0,
        opacity: 0,
    },
    animate: {
        // Come to center, fully visible
        y: "0%",
        scale: 1,
        rotateX: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
    exit: {
        // Old page moves upward, smaller, slightly tilted
        y: "-50%",
        scale: 0.9,
        rotateX: 10,
        opacity: 0.7,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};

export default function TransitionWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="sync">
            {/**
             * AnimatePresence will keep the old page in the DOM
             * until its exit animation is finished,
             * while also rendering the new page's animation.
             */}
            <motion.div
                key={pathname}
                style={{
                    // The perspective helps the rotateX look more realistic
                    perspective: "1200px",
                    position: "relative",
                    overflow: "hidden",
                }}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
