"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const transitionVariants = {
    initial: {
        opacity: 0,
        y: 40,  // e.g. slight push from below
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 0,
        y: -40, // fades out upwards
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export default function TransitionWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            {/*
        The key prop triggers exit/enter animations
        each time pathname changes (e.g., from / to /projects/88rising).
      */}
            <motion.div
                key={pathname}
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
