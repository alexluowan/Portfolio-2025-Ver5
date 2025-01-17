import ContentItem from "../components/ContentItem";
import Link from "next/link";
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <main>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 lg:mt-0 mt-20">
                <div className="col-start-1 col-span-4 lg:col-span-5">
                    <h3 className="font-neuehaasunica text-xl">
                        Alex is an interaction designer crafting unique, empathy-driven experiences through
                        storytelling.
                    </h3>
                </div>
                <div className="col-start-1 col-span-4 lg:col-span-5 py-8 row-start-2">
                    <h3 className="font-neuehaasunica text-xl">
                        Graduating in September 2025 with a degree in Interactive Arts and Technology from Simon
                        Fraser University, currently seeking product design internships or freelance opportunities.
                    </h3>
                </div>
                <Navbar/>
            </section>

            <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 mt-20 mx-5 sticky">
                {/* First Content Block with Video */}
                <div className="col-start-1 col-span-4">
                    <Link href="/projects/88rising">
                        <ContentItem
                            videoSrc="/video/88rising/88risingsizzlereelmp4.mp4"
                            title="88RISING"
                            subtitleLeft="PRODUCT DESIGN + BRAND"
                            subtitleRight="2023"
                            borderColor="border-black"
                        />
                    </Link>
                </div>

                {/* Second Content Block */}
                <div className="col-start-1 lg:col-start-5 col-span-4 py-5 lg:py-0">
                    <Link href="/projects/givemeyesterday">
                        <ContentItem
                            imageSrc="/img/givemeyesterday/thumbnail.png"
                            title="GIVE ME YESTERDAY"
                            subtitleLeft="INTERACTION DESIGN + BRAND"
                            subtitleRight="2022"
                            borderColor="border-black"
                        />
                    </Link>
                </div>

                {/* Third Content Block */}
                <div className="col-start-1 lg:col-start-9 col-span-4">
                    <Link target="_blank" href="https://www.blaze.ai/">
                        <ContentItem
                            videoSrc="/video/blazeai/blazeaicontentdesigner.mp4"
                            title="BLAZEAI"
                            subtitleLeft="VISUAL DESIGN"
                            subtitleRight="2024"
                            borderColor="border-black"
                        />
                    </Link>
                </div>
            </div>


        </main>
    );
}
