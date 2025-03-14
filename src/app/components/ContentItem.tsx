import React from "react";
import Image from "next/image";

interface ContentItemProps {
    videoSrc?: string;
    imageSrc?: string;
    title?: string;
    subtitleLeft?: string;
    subtitleRight?: string;
    backgroundColor?: string;
    borderColor?: string;
}

const ContentItem: React.FC<ContentItemProps> = ({
                                                     videoSrc,
                                                     imageSrc,
                                                     title,
                                                     subtitleLeft,
                                                     subtitleRight,
                                                     backgroundColor = "bg-red-400",
                                                     borderColor = "border-black",
                                                 }) => {
    return (
        <div className={`aspect-video relative rounded-lg border ${borderColor} ${backgroundColor}`}>
            {videoSrc ? (
                <video
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    // Consider using preload="none" or lazy loading via an Intersection Observer if the video is not above the fold.
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg filter brightness-50"
                />
            ) : imageSrc ? (
                <Image
                    src={imageSrc}
                    alt={title || "Content image"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg filter brightness-50"
                    // Next.js' Image component lazy loads images by default.
                />
            ) : null}

            {title && (
                <h1 className="absolute bottom-4 left-4 text-background text-4xl font-offbit z-10">
                    {title}
                </h1>
            )}
            {subtitleLeft && (
                <h4 className="absolute top-4 left-4 text-background text-h4mono font-favoritmono z-10">
                    {subtitleLeft}
                </h4>
            )}
            {subtitleRight && (
                <h4 className="absolute top-4 right-4 text-background text-h4mono font-favoritmono z-10">
                    {subtitleRight}
                </h4>
            )}
        </div>
    );
};

export default React.memo(ContentItem);
