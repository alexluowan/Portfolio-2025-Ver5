import React from "react";

interface CloseButtonProps {
    href?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({ href = "/" }) => {
    return (
        <div className="fixed top-0 right-0 m-5 z-20">
            <a
                href={href}
                className="
          group
          w-10 h-10
          flex items-center justify-center
          bg-white
          rounded-[5px]
          mr-5 mt-5
          cursor-pointer
          transition-transform
          duration-300
          ease-in-out
          hover:scale-105
          outline
          border-black
          outline-1

        "
            >
                {/* The 'X' text will rotate on hover */}
                <div
                    className="
            font-thin
            transform
            transition-transform
            duration-300
            ease-in-out
            group-hover:rotate-180
          "
                >
                    X
                </div>
            </a>
        </div>
    );
};

export default CloseButton;
