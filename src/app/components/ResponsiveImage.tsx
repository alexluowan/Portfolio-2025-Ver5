import React from "react";
import Image from "next/image";

interface ResponsiveImageProps {
    desktopSrc: string;
    mobileSrc: string;
    alt: string;
    className?: string; // Optional for additional custom styling
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
                                                             desktopSrc,
                                                             mobileSrc,
                                                             alt,
                                                             className = "",
                                                         }) => {
    return (
        <div className={`relative ${className}`}>
            {/* Desktop Image */}
            <div className="hidden lg:block">
                <Image
                    src={desktopSrc}
                    alt={alt}
                    layout="responsive"
                    width={1728} // Example width, customize as needed
                    height={626} // Example height, customize as needed
                />
            </div>
            {/* Mobile Image */}
            <div className="block lg:hidden">
                <Image
                    src={mobileSrc}
                    alt={alt}
                    layout="responsive"
                    width={801} // Example width, customize as needed
                    height={626} // Example height, customize as needed
                />
            </div>
        </div>
    );
};

export default ResponsiveImage;
