import Image from "next/image";
import ResponsiveImage from "@/src/app/components/ResponsiveImage";
import CloseButton from "@/src/app/components/CloseButton";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "88rising",
    description: "Generated by create next app",
};


export default function Home() {
    return (
        <main>
            <ResponsiveImage
                desktopSrc="/img/88rising/88risingthumbnail.png"
                mobileSrc="/img/88rising/88risingthumbnailmobile.png"
                alt="An Image Showcasing a Laptop with a Website"
            />
            <CloseButton>
            </CloseButton>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5">
                <div className="col-start-1 col-span-full lg:col-start-3 lg:col-span-8">
                    <h1 className="font-offbit text-3xl lg:text-h1 uppercase lg:leading-10">
                        Reimagining 88risings website experience for fans to engage with their favourite artists and
                        stay informed.
                    </h1>
                    <p className="font-neuehaasunica mt-8">
                        As part of my studies, my classmates and I were tasked with identifying a client facing a
                        business problem, describing that problem, and crafting a solution. This 7-week experience
                        design project required us to develop a tailored intervention to address the client’s needs.
                        I was responsible for conducting user research, finalizing the interaction designs, and
                        facilitating a design sprint.
                    </p>
                    <p className="mt-5">
                        This project is not associated with 88rising. It was created as a mock client for an
                        academic assignment.
                    </p>
                    <div className="flex flex-col md:flex-row mt-10 gap-8 md:gap-x-16">
                        <div className="flex flex-col w-full md:w-3/5">
                            <div>
                                <h4 className="font-favoritmono text-h4mono">YEAR & DURATION</h4>
                                <p className="font-neuehaasunica">2023 - 7 Weeks</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full md:w-4/5">
                            <div>
                                <h4 className="font-favoritmono text-h4mono">MY ROLE</h4>
                                <p className="font-neuehaasunica">
                                    Lead Interaction Designer, Prototyping, Visual Designer, Facilitator, Mobile
                                    Designer
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full md:w-4/5">
                            <div>
                                <h4 className="font-favoritmono text-h4mono">TEAM MEMBERS</h4>
                                <p className="font-neuehaasunica">
                                    Claret Egwim-Nwagbara, Justin Yu, Luke Do, Terrence Xu
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full md:w-3/5">
                            <div>
                                <h4 className="font-favoritmono text-h4mono">TOOLS</h4>
                                <p className="font-neuehaasunica">
                                    Figma, After Effects, Premiere Pro, Google Surveys
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <hr className="border-t border-black w-screen mt-16"/>


            {/*/!*SVG Section *!/*/}
            {/*/!* Quote Section *!/*/}
            <div className=" absolute z-20 grid grid-cols-4 lg:grid-cols-12 mt-10 gap-x-5 lg:pt-40 mx-5 ">
                <div className="lg:col-start-12 col-span-4 lg:col-end-6 text-right" dir="rtl">
                    <div className="flex flex-col gap-y-5">
                        <div>
                            <h3 className="font-neuehaasunica text-h4mono lg:text-2xl italic" dir="ltr">
                                “For Asians and Asian Americans and just Asian youth globally, there’s no real
                                home on
                                the Internet,
                                or a company consistently putting out things that either include Asian talent or
                                Asian viewpoints
                                in stories.”
                            </h3>
                        </div>
                        <div>
                            <h4 className="font-favoritmono text-h4monomobile uppercase lg:text-xl" dir="ltr">
                                CEO & Founder of 88rising - Sean Miyashiro
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pr-5 lg:pr-96 w-screen pt-40">
                <Image
                    src="/img/88rising/statistics.svg"
                    alt="Statistics Icon"
                    layout="responsive"
                    width={1208} // Set the original width of the SVG
                    height={570} // Set the original height of the SVG
                />
            </div>

            <hr className="border-t border-black w-full"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 col-span-4 lg:col-start-3 lg:col-span-8">
                    <h1 className="font-offbit text-3xl lg:text-h1">
                        SETTING THE STAGE
                    </h1>
                    <div className="flex flex-col lg:flex-row gap-x-10">
                        <div className="lg:w-2/4">
                            <h4 className="font-favoritmono text-h4mono mt-10">
                                CONTEXT
                            </h4>
                            <p className=" mt-5 font-neuehaasunica">
                                88rising redefined how Asians fit in mainstream media, challenging existing
                                stereotypes by
                                showcasing that Asians can have an equal voice in the music industry. Having
                                fostered many
                                breakout artists like Joji, Rich Brian, and Niki, 88rising quickly became a cultural
                                phenomenon, gaining over 3 billion views within 3 years on YouTube.
                            </p>
                        </div>
                        <div className="lg:w-2/4">
                            <h4 className="font-favoritmono text-h4mono mt-10">
                                BUSINESS PROBLEM
                            </h4>
                            <p className=" mt-5 font-neuehaasunica">
                                However, 88rising has since faced issues with discoverability. Within the past 4
                                years,
                                they’ve only accumulated 0.43 billion views on YouTube and have struggled with
                                providing
                                their new artists with the same reach that they formerly had.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="border-t border-black w-full mt-10 lg:mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 col-span-4 lg:col-start-3 lg:col-span-8">
                    <div className="flex flex-col gap-y-10">
                        <div className="">
                            <h4 className="font-favoritmono text-h4mono lg:mt-10">
                                SOLUTION
                            </h4>
                            <h1 className="text-xl lg:text-2xl mt-5 font-neuehaasunica uppercase font-medium">
                                We propose a centralized platform that helps casual fans discover more artists under
                                the 88Rising label, making it easier to explore music while supporting emerging
                                talent and fostering deeper audience connections.
                            </h1>
                        </div>
                        <div className="">
                            <h4 className="font-favoritmono text-h4mono lg:mt-10">
                                FRAMING
                            </h4>
                            <h1 className="text-xl lg:text-2xl mt-5 font-neuehaasunica uppercase font-medium">
                                How might we help CASUAL fans discover both emerging and overlooked artists
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="border-t border-black w-full mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-2">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        CONTENT
                        STRATEGY
                    </h1>
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4 mt-12 lg:mt-0">
                    <div className="flex flex-col gap-y-10">
                        <div>
                            <h4 className="font-favoritmono text-h4mono">
                                COLLABORATIVE PROMOTION
                            </h4>
                            <p className=" mt-5 font-neuehaasunica">
                                Promoting discovery and increasing exposure for the lesser-known artists of 88rising
                                by
                                surfacing collaborative content with established talents.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-favoritmono text-h4mono mt-10">
                                PERSONIFYING ARTISTS
                            </h4>
                            <p className=" mt-5 font-neuehaasunica">
                                Showcasing the personalities of artists, to create a memorable first impression
                                through unconventional means: using stickers and short clips that personify the
                                artists and highlight them in a more relatable light.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <hr className="border-t border-black w-full mt-10 lg:mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-2">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        FINAL DESIGNS
                        & CONCEPTS
                    </h1>
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4">
                    <p className=" mt-5 lg:mt-0 font-neuehaasunica">
                        Over the past three weeks, I contributed to the development and rebranding of a website
                        experience for 88rising. My role involved enhancing the visual fidelity of initial
                        wireframes, creating high-fidelity prototypes, and ensuring the design aligned with the goal
                        of a centralized platform. This redesign aimed to help casual fans easily discover and
                        support artists from 88rising&#39;s extensive roster, boosting visibility for both prominent
                        and
                        emerging talent while enhancing fan retention.
                    </p>
                </div>
                <div className="col-start-1 lg:col-start-2 col-span-4 flex flex-col justify-end mt-8 lg:mt-0">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10 lg:w-2/4">
                        LANGUAGE DRIVEN ARTISTS DISCOVERY
                    </h1>
                    <p className="font-neuehaasunica mt-5 lg:w-3/4">
                        The landing page features an array of Asian languages alongside their respective countries,
                        fostering exploration and discoverability. Designed with the aim of initiating connections,
                        it invites users to gravitate towards a language or country they resonate with, facilitating
                        the discovery of artists from the same cultural background.
                    </p>
                </div>

                {/*/!* Video *!/*/}
                <div
                    className="lg:col-start-6 lg:col-span-6 col-start-1 col-span-4 mt-20 row-start-3 lg:row-start-2">
                    <video
                        className="w-full rounded-lg"
                        controls={false}
                        autoPlay={true}
                        playsInline={true}
                        muted
                        loop
                    >
                        <source src="/video/88rising/homepage.webm" type="video/webm"/>
                        <source src="/video/88rising/homepage.mov" type="video/mp4"/>

                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className="col-start-1 lg:col-start-2 col-span-4 lg:col-span-6 mt-36 lg:row-start-3 row-start-5">
                    <video
                        className="w-full rounded-lg"
                        controls={false}
                        autoPlay={true}
                        playsInline={true}
                        muted
                        loop
                    >
                        <source src="/video/88rising/collaborations.webm" type="video/webm"/>
                        <source src="/video/88rising/collaborations.mov" type="video/mp4"/>

                        Your browser does not support the video tag.
                    </video>
                </div>


                <div
                    className="col-start-1 lg:col-start-8 col-span-4 lg:col-span-5 flex flex-col justify-end lg:ml-28 mt-8 lg:mt-0">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10 lg:w-2/4">
                        UPCOMING RELEASES
                    </h1>
                    <p className="font-neuehaasunica mt-5 lg:w-3/4">
                        Clicking into a country reveals all the artists from that region, introducing fans to
                        artists who may share a similar cultural background. On the right side of the screen,
                        highlighted collaborations offer exposure for lesser-known 88rising artists, providing fans
                        with opportunities to connect and discover new talent and music.
                    </p>
                </div>

                <div className="col-start-1 lg:col-start-2 col-span-4 flex flex-col justify-end mt-8 lg:mt-0">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10 lg:w-2/4">
                        ADAPTABLE INDIVIDUALITY
                    </h1>
                    <p className="font-neuehaasunica mt-5 lg:w-3/4">
                        Individual artist pages offer fans a unique, immersive discovery experience. A biography
                        section uses an intimate photo stack motif to present personal and relatable content on a
                        single screen, encouraging deeper exploration. Fans can also browse song and merchandise
                        pages, with music videos playing in the background to enhance the immersive experience.
                    </p>
                </div>

                {/* Video */}
                <div
                    className="lg:col-start-6 lg:col-span-6 lg:mt-36 col-start-1 col-span-4 mt-20 row-start-7 lg:row-start-4">

                    <video
                        className="w-full rounded-lg"
                        controls={false}
                        autoPlay={true}
                        playsInline={true}
                        muted
                        loop
                    >
                        <source src="/video/88rising/artistspage.webm" type="video/webm"/>
                        <source src="/video/88rising/artistspage.mov" type="video/mp4"/>

                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className="col-start-1 lg:col-start-2 col-span-4 lg:col-span-6 mt-36 lg:row-start-5 row-start-9">
                    <video
                        className="w-full rounded-lg"
                        controls={false}
                        autoPlay={true}
                        playsInline={true}
                        muted
                        loop
                    >
                        <source src="/video/88rising/releases.webm" type="video/webm"/>
                        <source src="/video/88rising/releases.mov" type="video/mp4"/>

                        Your browser does not support the video tag.
                    </video>
                </div>


                <div
                    className="col-start-1 lg:col-start-8 col-span-4 lg:col-span-5 flex flex-col justify-end lg:ml-28 mt-8 lg:mt-0">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10 lg:w-2/4">
                        BEHIND THE BEAT COLLABORATIONS
                    </h1>
                    <p className="font-neuehaasunica mt-5 lg:w-3/4">
                        User research revealed that many fans weren’t aware of 88rising’s newer releases. To address
                        this, we introduced an &#39;Upcoming Releases&#39; page, organized as a waveform-inspired
                        linear
                        calendar, making it easier for fans to discover fresh drops and anticipate what’s coming
                        next, ultimately boosting engagement and relevance.
                    </p>
                </div>
            </section>
            <hr className="border-t border-black w-full mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mt-10 lg:mt-28 mx-5">
                <section
                    className="lg:col-start-7 lg:col-span-5 grid grid-cols-4 col-span-4 lg:grid-cols-5 gap-x-5 lg:row-start-1">
                    <div
                        className="col-span-1 lg:col-start-1 lg:col-span-1 mt-10 lg:justify-self-end lg:mt-5 row-start-1 ">
                        <p className=" font-neuehaasunica">62%</p>
                    </div>
                    <div className="col-span-3 lg:col-start-2 lg:col-span-4 mt-10 lg:mt-5 row-start-1 -ml-16 lg:ml-0">
                        <p className=" font-neuehaasunica">
                            Of respondents were not aware of 88rising’s new weekly releases
                        </p>
                    </div>
                    <div
                        className="col-span-1 lg:col-start-1 lg:col-span-1 lg:justify-self-end row-start-2 mt-5">
                        <p className=" font-neuehaasunica">93%</p>
                    </div>
                    <div className="col-span-3 lg:col-start-2 lg:col-span-4 row-start-2 mt-5 -ml-16 lg:ml-0">
                        <p className=" font-neuehaasunica">
                            Of user interviews were not aware of the majority of artists signed to 88rising
                        </p>
                    </div>
                    <div
                        className="col-span-1 lg:col-start-1 lg:col-span-1 lg:justify-self-end row-start-3 mt-5">
                        <p className=" font-neuehaasunica">75%</p>
                    </div>
                    <div className="col-span-3 lg:col-start-2 lg:col-span-4 row-start-3 mt-5 -ml-16 lg:ml-0">
                        <p className=" font-neuehaasunica">
                            Of respondents believe that 88rising is declining in popularity </p>
                    </div>
                    <div
                        className="col-span-1 lg:col-start-1 lg:col-span-1 lg:justify-self-end row-start-4 mt-5">
                        <p className=" font-neuehaasunica">41%</p>
                    </div>
                    <div className="col-span-3 lg:col-start-2 lg:col-span-4 row-start-4 mt-5 -ml-16 lg:ml-0">
                        <p className=" font-neuehaasunica">
                            Of respondents attributed to 88risings decline in popularity to a lack of brand
                            engagement
                        </p>
                    </div>
                </section>
                {/* User Research Section */}
                <div className="lg:col-start-3 lg:col-span-4 col-span-4 mt-10 lg:mt-5 row-start-1">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        USER RESEARCH
                    </h1>
                    <p className=" font-neuehaasunica mt-5">
                        To understand 88rising&#39;s audience, we conducted 15 interviews and surveyed 89 respondents
                        from social media and fan communities. Our research focused on exploring their music-sharing
                        habits, brand perception, and engagement with the artist roster.
                    </p>
                </div>
            </section>


            <hr className="border-t border-black w-full mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 col-span-4 lg:col-start-3 lg:col-span-8">
                    <h1 className="font-offbit text-3xl lg:text-h1">
                        TARGET USER: CASUAL FANS
                    </h1>
                    <div className="flex flex-col lg:flex-row gap-x-10">
                        <div className="lg:w-2/4">
                            <h4 className="font-favoritmono text-h4mono mt-10">
                                DEFINING CASUAL FANS
                            </h4>
                            <p className=" mt-5 font-neuehaasunica">
                                Those who gravitate towards 88rising’s renowned artists but show limited awareness
                                of other talents on the roster. While they are interested in knowing more about
                                these lesser-known artists, casual fans most of the time, will only engage with
                                artists if they appear in their feeds.
                            </p>
                        </div>
                        <div className="lg:w-2/4">
                            <h4 className="font-favoritmono text-h4mono mt-10">
                                RATIONALE
                            </h4>
                            <p className=" mt-5 font-neuehaasunica">
                                We chose to target casual fans, as they have shown declining engagement. Focusing on
                                this segment offers 88rising opportunities to strengthen brand loyalty and drive
                                growth by showcasing their diverse talent roster.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="border-t border-black w-full mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-2">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        CURRENT TOUCHPOINTS
                    </h1>
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4">
                    <p className=" mt-5 lg:mt-0 font-neuehaasunica">
                        We delved deeper into the pain points of casual fans and discovered that the current
                        touchpoints section highlights how artist content is scattered across multiple platforms,
                        making it difficult for fans to engage with and connect to their favorite creators.
                    </p>
                </div>
                <div className="col-start-1 lg:col-start-2 col-span-4 flex flex-col justify-end mt-8 lg:mt-0">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10 lg:w-2/4">
                        YOUTUBE
                    </h1>
                    <p className="font-neuehaasunica mt-5 lg:w-3/4">
                        YouTube is currently 88rising’s primary platform for showcasing original content, including
                        music videos, behind-the-scenes clips, interviews, and variety-style segments. However, this
                        content is buried across multiple channels, making it difficult for fans to discover and
                        connect with their favourite artists.
                    </p>
                </div>

                {/*/!* Video *!/*/}
                <div
                    className="lg:col-start-6 lg:col-span-6 lg:mt-36 col-start-1 col-span-4 mt-20 lg:mt-0 row-start-3 lg:row-start-2">
                    <video
                        className="w-full rounded-lg"
                        controls={false}
                        autoPlay={true}
                        playsInline={true}
                        muted
                        loop
                    >
                        <source src="/video/88rising/88risingyoutubefeed.webm" type="video/webm"/>
                        <source src="/video/88rising/88risingyoutubefeed.mov" type="video/mp4"/>

                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className="col-start-1 lg:col-start-2 col-span-4 lg:col-span-6 mt-36 lg:row-start-3 row-start-5">
                    <video
                        className="w-full rounded-lg"
                        controls={false}
                        autoPlay={true}
                        playsInline={true}
                        muted
                        loop
                    >
                        <source src="/video/88rising/88risingcurrentsite.webm" type="video/webm"/>
                        <source src="/video/88rising/88risingcurrentsite.mov" type="video/mp4"/>

                        Your browser does not support the video tag.
                    </video>
                </div>


                <div
                    className="col-start-1 lg:col-start-8 col-span-4 lg:col-span-5 flex flex-col justify-end lg:ml-28 mt-8 lg:mt-0">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10 lg:w-2/4">
                        88RISING WEBSITE
                    </h1>
                    <p className="font-neuehaasunica mt-5 lg:w-3/4">
                        Additionally, 88rising’s current website only focuses on merchandise sales, lacking any
                        clarity on their current roster of artists, what the brand is about, and any information
                        about the personalities surrounding the brand.
                    </p>
                </div>
            </section>
            <hr className="border-t border-black w-full mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-2">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        INITIAL IDEATIONS
                    </h1>
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4 ">
                    <p className=" mt-5 lg:mt-0 font-neuehaasunica">
                        Our team quickly developed mid-fidelity wireframes to align with our content strategy. While
                        this iteration did not fully meet expectations, mentors found the core concept highly
                        compelling, highlighting its potential and relevance.
                    </p>
                </div>

                <div className="col-start-1 lg:col-start-3 col-span-4 lg:mt-32 mt-5">
                    <Image
                        src="/img/88rising/ideation1.png"
                        alt="First Ideation"
                        layout="responsive"
                        className="rounded-lg"
                        width={541} // Set the original width of the SVG
                        height={462} // Set the original height of the SVG
                    />
                    <Image
                        src="/img/88rising/ideation2.png"
                        alt="First Ideation"
                        layout="responsive"
                        className="mt-4 rounded-lg"
                        width={541} // Set the original width of the SVG
                        height={336} // Set the original height of the SVG
                    />
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4 row-start-3 lg:row-start-2 mt-16 lg:mt-32">
                    <Image
                        src="/img/88rising/ideation3.png"
                        alt="First Ideation"
                        layout="responsive"
                        className="rounded-lg"
                        width={563} // Set the original width of the SVG
                        height={813} // Set the original height of the SVG
                    />
                </div>
            </section>
            <hr className="border-t border-black w-full mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-2">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        SECOND IDEATIONS
                    </h1>
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4 ">
                    <p className=" mt-5 lg:mt-0 font-neuehaasunica">
                        After feedback, we refined our approach to better balance 88rising&#39;s goals with
                        actionable
                        outcomes. While this improved the overall concept, the artists&#39; page was noted for
                        lacking
                        cohesion and needing stronger integration with the site&#39;s design.
                    </p>
                </div>

                <div className="col-start-1 lg:col-start-3 col-span-4 mt-20 lg:mt-32">
                    <Image
                        src="/img/88rising/homepageannotations.svg"
                        alt="First Ideation"
                        layout="responsive"
                        className="rounded-lg"
                        width={549} // Set the original width of the SVG
                        height={512} // Set the original height of the SVG
                    />
                    <Image
                        src="/img/88rising/artistspageannotations.svg"
                        alt="First Ideation"
                        layout="responsive"
                        className="mt-4 rounded-lg"
                        width={549} // Set the original width of the SVG
                        height={512} // Set the original height of the SVG
                    />
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4 mt-5 lg:mt-32">
                    <Image
                        src="/img/88rising/collaborationspageannotations.svg"
                        alt="First Ideation"
                        layout="responsive"
                        className="rounded-lg"
                        width={549} // Set the original width of the SVG
                        height={512} // Set the original height of the SVG
                    />
                    <Image
                        src="/img/88rising/discographyannotations.svg"
                        alt="First Ideation"
                        layout="responsive"
                        className="mt-4 rounded-lg"
                        width={549} // Set the original width of the SVG
                        height={512} // Set the original height of the SVG
                    />
                </div>
            </section>


            <hr className="border-t border-black w-full mt-28"/>


            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-2">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        FULLY RESPONSIVE
                    </h1>
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4 ">
                    <p className=" mt-5 lg:mt-0 font-neuehaasunica">
                        As many fans consume music-related content primarily through mobile devices, our next step
                        is to adapt the desktop design into a mobile-friendly experience. This involves rethinking
                        how interactions and content layouts translate to smaller screen sizes, particularly as the
                        desktop design relies heavily on hover-based interactions. Experimenting with touch-based
                        interaction systems will be crucial to ensure a seamless and engaging mobile experience.

                    </p>
                </div>

                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-8 mt-16 lg:mt-32">
                    <div className="flex flex-row gap-x-5 lg:gap-x-32">
                        <div className="grow">
                            <video
                                className="w-full rounded-lg"
                                controls={false}
                                autoPlay={true}
                                playsInline={true}
                                muted
                                loop
                            >
                                <source src="/video/88rising/collaborationmobile.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="grow">
                            <video
                                className="w-full rounded-lg"
                                controls={false}
                                autoPlay={true}
                                playsInline={true}
                                muted
                                loop
                            >
                                <source src="/video/88rising/storymobile.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="grow">
                            <video
                                className="w-full rounded-lg"
                                controls={false}
                                autoPlay={true}
                                playsInline={true}
                                muted
                                loop
                            >
                                <source src="/video/88rising/artistsmobile.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>


                </div>
            </section>
            <hr className="border-t border-black w-full mt-28"/>


            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-2">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        RETROSPECTIVE
                    </h1>
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4 ">
                    <p className="mt-5 lg:mt-0 font-neuehaasunica">
                        We had 7 weeks to find a client and build a solution, but we spent most of it searching for
                        the &#34;perfect business problem,&#34; leaving just 3 weeks to deliver. This experience
                        reminded me
                        that design is rarely linear and requires prioritizing what matters most under constraints.
                        While we couldn’t complete everything, we focused on storytelling, clear visuals, engaging
                        interactions, and thoughtful copywriting to create an emotional connection between fans and
                        artists.
                    </p>
                    <p className=" mt-5 font-neuehaasunica">
                        This project reinforced the value of adaptability and showed me that impactful design is
                        about more than aesthetics—it’s about crafting meaningful user experiences that resonate.
                    </p>
                </div>
            </section>
            <footer className="col-start-1 lg:col-span-6 mt-36"></footer>
        </main>

    );
}
