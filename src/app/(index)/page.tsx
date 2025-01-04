import Image from "next/image";
import ContentItem from "../components/ContentItem";
export default function Home() {
    return (
        <div className="">
            <main>
                <div className="grid grid-cols-12 gap-x-5 py-8 mx-5">
                    <div className="col-start-1 col-span-5">
                        <h3 className="font-neuehaasunica text-xl">
                            Alex is an interaction designer crafting unique, empathy-driven experiences through
                            storytelling.
                        </h3>
                    </div>
                    <div className="col-start-1 col-span-5 py-8">
                        <h3 className="font-neuehaasunica text-xl">
                            Graduating in September 2025 with a degree in Interactive Arts and Technology from Simon
                            Fraser University, currently seeking product design internships or freelance opportunities.
                        </h3>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-5 mt-60 mx-5">
                    {/* First Content Block with Video */}
                    <div className="col-start-1 col-span-4">
                        <ContentItem
                            videoSrc="/video/88rising/88risingsizzlereelmp4.mp4"
                            title="88rising"
                            subtitleLeft="PRODUCT DESIGN + BRAND"
                            subtitleRight="2023"
                            borderColor="border-black"
                        />
                    </div>

                    {/* Second Content Block */}
                    <div className="col-start-5 col-span-4">
                        <ContentItem backgroundColor="bg-red-400"/>
                    </div>

                    {/* Third Content Block */}
                    <div className="col-start-9 col-span-4">
                        <ContentItem backgroundColor="bg-red-400"/>
                    </div>
                </div>


            </main>
        </div>
    );
}
