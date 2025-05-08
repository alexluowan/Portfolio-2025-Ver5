import ContentItem from "@/src/app/components/ContentItem";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col lg:flex-row w-screen h-screen overflow-hidden">
            {/* Left section: pinned on lg, stacked on mobile */}
            <section
                className="
          w-full
          lg:w-1/3
          h-auto
          lg:h-screen
          px-5
          py-8
          /* Pinned only on large screens */
          lg:fixed
          lg:top-0
          lg:left-0

        "
            >
                <h3 className="font-neuehaasunica text-xl mb-4">
                    Alex is a Vancouver-based product designer who integrates aesthetics, user research, and
                    strategic thinking to shape compelling products and memorable brands. He is on the verge of
                    completing his studies in Interactive Arts & Technology at Simon Fraser University—an experience
                    he holds dear and will treasure for a lifetime.
                </h3>

                <h3 className="font-neuehaasunica text-xl">
                    Currently seeking product design internship positions or freelance opportunities.
                </h3>

                <div className="flex flex-row w-full mt-10 gap-x-16">
                    <div>
                        <h4 className="font-favoritmono text-h4mono">WORKED WITH</h4>
                        <div className="flex flex-col w-full mt-2">
                            <p className="font-neuehaasunica">Blaze.ai</p>
                            <p className="font-neuehaasunica">Phlur</p>
                            <p className="font-neuehaasunica">Cyklar</p>
                            <p className="font-neuehaasunica">Lilypad Paint</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-favoritmono text-h4mono">OTHER SPACES</h4>
                        <div className="flex flex-col w-full mt-2">
                            <Link target="_blank" href="/projects/about">
                                <p className="font-neuehaasunica underline">About</p>
                            </Link>
                            <Link href="https://drive.google.com/file/d/1FNF-Snw4YTDx5O6uOc9lLK5lufWIOhF_/view?usp=sharing">
                            <p className="font-neuehaasunica underline">Resume</p>
                            </Link>
                                <Link href="https://read.cv/aluowan">
                                <p className="font-neuehaasunica underline">Read.cv</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Right section: offset on lg, scrollable */}
            <section
                className="
                w-full
          lg:w-2/3
          h-auto
          lg:h-screen
          overflow-y-auto
          px-5
          py-8
          lg:ml-[33vw]
          /* Add padding-top on large screens to move it down below the nav */

        "
            >
                <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-5">
                    {/* 88RISING */}
                    <div className="col-span-4 lg:col-span-full">
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
                    <div className="col-span-4 lg:col-span-full mt-5">
                        <Link target="_blank" href="/projects/figma">
                            <ContentItem
                                imageSrc="/img/figma/figmaplugindockthumbnail.png"
                                title="FIGMA PLUGIN DOCK"
                                subtitleLeft="UX/UI + PERSONAL PROJECT"
                                subtitleRight="2025"
                                borderColor="border-black"
                            />
                        </Link>
                    </div>
                    <div className="col-span-4 lg:col-span-full mt-5">
                        <Link target="_blank" href="/projects/wise">
                            <ContentItem
                                imageSrc="/img/wise/wisethumbnail.png"
                                title="WISE"
                                subtitleLeft="UI DESIGN + PERSONAL PROJECT"
                                subtitleRight="2025"
                                borderColor="border-black"
                            />
                        </Link>
                    </div>
                    {/* GIVE ME YESTERDAY */}
                    <div className="col-span-4 lg:col-span-full mt-5">
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
                    {/* BLAZEAI */}
                    <div className="col-span-4 lg:col-span-full mt-5">
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
            </section>
        </main>
    );
}
