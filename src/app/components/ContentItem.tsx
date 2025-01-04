// components/ContentItem.tsx
import React from "react";

interface ContentItemProps {
    videoSrc?: string;
    title?: string;
    subtitleLeft?: string;
    subtitleRight?: string;
    backgroundColor?: string;
    borderColor?: string;
}

const ContentItem: React.FC<ContentItemProps> = ({
                                                     videoSrc,
                                                     title,
                                                     subtitleLeft,
                                                     subtitleRight,
                                                     backgroundColor = "bg-red-400",
                                                     borderColor = "border-black",
                                                 }) => {
    return (
        <div className={`aspect-square relative rounded-lg border ${borderColor} ${backgroundColor}`}>
            {videoSrc ? (
                <>
                    <video
                        src={videoSrc}
                        autoPlay
                        muted
                        loop
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg filter brightness-50"
                    />
                    <h1 className="absolute bottom-4 left-4 text-background text-4xl font-offbit z-10">
                        {title}
                    </h1>
                    <h4 className="absolute top-4 left-4 text-background text-h4mono font-favoritmono z-10">
                        {subtitleLeft}
                    </h4>
                    <h4 className="absolute top-4 right-4 text-background text-h4mono font-favoritmono z-10">
                        {subtitleRight}
                    </h4>
                </>
            ) : null}
        </div>
    );
};

export default ContentItem;