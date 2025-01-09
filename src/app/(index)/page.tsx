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
                    <ul className="flex flex-row col-span-4 row-start-1 col-start-9 font-neuehaasunica text-h4mono bg-background border border-black rounded-full py-2.5">
                        <li>
                            <a href="/" className="ml-12 py-1 flex justify-center">
                                WORK
                            </a>
                        </li>
                        {/*<li>*/}
                        {/*    <a href="/about" className="px-10 py-1 flex items-center justify-center">*/}
                        {/*        ABOUT*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a*/}
                        {/*        href="https://drive.google.com/file/d/10WjERFkheVFYvBMlpCuytdHzabqjjv--/view?usp=sharing"*/}
                        {/*        className="pl-3 py-1 flex items-center justify-center"*/}
                        {/*        target="_blank"*/}
                        {/*        rel="noopener noreferrer"*/}
                        {/*    >*/}
                        {/*        RESUME*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                    </ul>

                </div>


                <div className="grid grid-cols-12 gap-x-5 mt-60 mx-5">
                    {/* First Content Block with Video */}
                    <div className="col-start-1 col-span-4">
                        <a href="/projects/88rising">
                            <ContentItem
                                videoSrc="/video/88rising/88risingsizzlereelmp4.mp4"
                                title="88rising"
                                subtitleLeft="PRODUCT DESIGN + BRAND"
                                subtitleRight="2023"
                                borderColor="border-black"
                            />
                        </a>
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
    )
        ;
}
