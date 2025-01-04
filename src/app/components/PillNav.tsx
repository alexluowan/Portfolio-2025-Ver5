"use client"; // Only needed in Next.js App Router if you're doing client-side logic.

import Link from "next/link";

export default function PillNav() {
    return (
        <nav className="bg-gray-100 rounded-full px-6 py-4 inline-flex items-center space-x-4">
            {/* Use Link for internal navigation */}
            <Link
                href="/work"
                className="
          text-h4mono
          font-neuehaasunica
          px-4
          py-2
          rounded-full
          transition
          transform
          duration-300
          ease-out
          hover:bg-gray-200
          hover:scale-105
        "
            >
                WORK
            </Link>

            <Link
                href="/about"
                className="
          text-h4mono
          font-neuehaasunica
          px-4
          py-2
          rounded-full
          transition
          transform
          duration-300
          ease-out
          hover:bg-gray-200
          hover:scale-105
        "
            >
                ABOUT
            </Link>

            {/* External link or mailto stays <a> */}
            <a
                href="mailto:jordan@egstad.com?subject=Hello, Egstad!"
                className="
          text-h4mono
          font-neuehaasunica
          px-4
          py-2
          rounded-full
          transition
          transform
          duration-300
          ease-out
          hover:bg-gray-200
          hover:scale-105
        "
            >
                EMAIL
            </a>
        </nav>
    );
}
