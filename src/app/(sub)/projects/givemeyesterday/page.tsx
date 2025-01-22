import Image from "next/image";
import Navbar from "@/src/app/components/Navbar";
import ResponsiveImage from "@/src/app/components/ResponsiveImage";
import CloseButton from "@/src/app/components/CloseButton";

export default function Home() {
    return (
        <main>
            <ResponsiveImage
                desktopSrc="/img/givemeyesterday/givemeyesterdaythumbnail.png"
                mobileSrc="/img/givemeyesterday/givemeyesterdaythumbnailmobile.png"
                alt="An Image Showcasing a Laptop with a Website"
            />
            <CloseButton>
            </CloseButton>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5">
                <div className="col-start-1 col-span-full lg:col-start-3 lg:col-span-8">
                    <h1 className="font-offbit text-h1 uppercase leading-10">
                        A pre-exhibition microsite that provides a curated preview of artworks by 14 international
                        artists, featured in Fondazione Prada’s &#39;Give Me Yesterday&#39; exhibition.
                    </h1>
                    <p className="font-neuehaasunica mt-8">
                        Over the course of five weeks, our exploration of art direction and graphic experimentation with
                        posters transitioned into content-driven interaction design. By analyzing key precedents aligned
                        with our design principles & qualities, we developed a final microsite that combined intentional
                        content design with informed art direction.
                    </p>
                    <p className="font-neuehaasunica  mt-5">
                        This project is not associated with exhibition. It was chosen as a mock client for an academic
                        assignment.
                    </p>
                    <div className="flex flex-col md:flex-row mt-10 gap-8 md:gap-x-16">
                        <div className="flex flex-col w-full md:w-3/5">
                            <div>
                                <h4 className="font-favoritmono text-h4mono">YEAR & DURATION</h4>
                                <p className="font-neuehaasunica ">
                                    2022 - 5 Weeks
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-4/5 ">
                            <div>
                                <h4 className="font-favoritmono text-h4mono">MY ROLE</h4>
                                <p className="font-neuehaasunica "> Lead Visual Designer,
                                    Interaction Designer, Prototyping
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-4/5">
                            <div>
                                <h4 className="font-favoritmono text-h4mono">TEAM MEMBERS</h4>
                                <p className="font-neuehaasunica ">
                                    Claret Egwim-Nwagbara, Jasper Precilla, Sam Newaz, Karishma Sen </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-3/5">
                            <div>
                                <h4 className="font-favoritmono text-h4mono">TOOLS</h4>
                                <p className="font-neuehaasunica">
                                    Figma, After Effects, Protopie, Processing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="border-t border-black w-full mt-16"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 col-span-4 lg:col-start-3 lg:col-span-8">
                    <div className="flex flex-col gap-y-10">
                        <div className="">
                            <h4 className="font-favoritmono text-h4mono lg:mt-10">
                                FRAMING
                            </h4>
                            <h1 className="text-xl lg:text-2xl mt-5 font-neuehaasunica uppercase font-medium">
                                How can we design a visual language that works seamlessly across print and web,
                                inspiring visitors to explore and learn more about these art collections? </h1>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="border-t border-black w-full mt-10 lg:mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-2">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        FONDAZIONE PRADA IS PROVOCATIVE
                    </h1>
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4">
                    <p className="mt-5 lg:mt-0 font-neuehaasunica">
                        Our direction for Fondazione Prada is inspired by the curated aesthetic of photographic art,
                        drawing parallels to the evocative and unconventional works of Torbjørn Rødland. This approach,
                        combined with the introspective themes of the Give Me Yesterday exhibition, creates a visual
                        narrative that is both thought-provoking and surreal. Below are exploratory examples capturing
                        this unique brand essence in action.
                    </p>
                </div>

                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-8 mt-28">
                    <div className="flex flex-col">
                        <div className="lg:flex lg:flex-row gap-x-6">
                            <div className="flex-grow">
                                <Image
                                    src="/img/givemeyesterday/billboardasset.png"
                                    alt="Billboard Asset"
                                    layout="responsive"
                                    className="rounded-lg"
                                    width={512} // Set the original width of the SVG
                                    height={304} // Set the original height of the SVG
                                />
                            </div>
                            <div className="flex-grow mt-5 lg:mt-0">
                                <Image
                                    src="/img/givemeyesterday/wallassetpng.png"
                                    alt="Wall Asset"
                                    layout="responsive"
                                    className="rounded-lg"
                                    width={583} // Set the original width of the SVG
                                    height={304} // Set the original height of the SVG
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="flex-grow">
                                <Image
                                    src="/img/givemeyesterday/thumbnail.png"
                                    alt="Wall Asset"
                                    layout="responsive"
                                    className="rounded-lg"
                                    width={5944} // Set the original width of the SVG
                                    height={3963} // Set the original height of the SVG
                                />
                            </div>
                        </div>
                    </div>

                </div>


            </section>
            <hr className="border-t border-black w-full mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-2 col-span-4 flex flex-col justify-end mt-8 lg:mt-0">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10 lg:w-2/4">
                        IMMERSIVE PREVIEW
                    </h1>
                    <p className="font-neuehaasunica mt-5 lg:w-3/4">
                        Greeting the visitor with floating images from the exhibition, each artist section and the
                        associated content are previewed through a colour representation. The transition from artist to
                        artist can be seamlessly achieved using a vertical scroll or by clicking through the navigation.
                        This design ensures the image remains the primary focus while still catering to users who prefer
                        to access additional information.
                    </p>
                </div>

                {/* Video */}
                <div
                    className="lg:col-start-6 lg:col-span-6 lg:mt-36 col-start-1 col-span-4 mt-20 row-start-1 lg:row-start-1">
                    <video
                        className="w-full rounded-lg"
                        controls={false}
                        autoPlay={true}
                        playsInline={true}
                        muted
                        loop
                    >
                        <source src="/video/givemeyesterday/homepage.webm" type="video/webm"/>
                        <source src="/video/givemeyesterday/homepage.mov" type="video/mp4"/>

                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="col-start-1 lg:col-start-2 col-span-4 flex flex-col justify-end mt-8 lg:mt-0">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10 lg:w-2/4">
                        INTERACTIVE SPOTLIGHT
                    </h1>
                    <p className="font-neuehaasunica mt-5 lg:w-3/4">
                        Each artist has a preview displayed at a large scale. The circle cursor appears as the user is
                        moving across the artist landing page screen, when clicked upon it transitions the visitor to
                        the artist gallery.
                    </p>
                </div>

                {/*/!* Video *!/*/}
                <div
                    className="lg:col-start-6 lg:col-span-6 lg:mt-36 col-start-1 col-span-4 mt-20 row-start-3 lg:row-start-2">
                    <video
                        className="w-full rounded-lg"
                        controls={false}
                        autoPlay={true}
                        muted
                        loop
                    >
                        <source src="/video/givemeyesterday/CursorTransition.webm" type="video/webm"/>
                        <source src="/video/givemeyesterday/CursorTransition.mov" type="video/mp4"/>

                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="col-start-1 lg:col-start-2 col-span-4 flex flex-col justify-end mt-8 lg:mt-0">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10 lg:w-2/4">
                        PARALLAX IMAGE GALLERY

                    </h1>
                    <p className="font-neuehaasunica mt-5 lg:w-3/4">
                        The visitor is able to view all of the artist’s images in a long horizontal parallax scroll. By
                        layering the images on top of each other and moving them at different speeds as the user
                        scrolls, we apply the concept of figure and ground to create depth. When you reach the end of
                        the gallery, you can scroll past a resistive scroll which allows you to travel to the next
                        artist’s gallery.
                    </p>
                </div>

                {/*/!* Video *!/*/}
                <div
                    className="lg:col-start-6 lg:col-span-6 lg:mt-36 col-start-1 col-span-4 mt-20 row-start-5 lg:row-start-3">
                    <video
                        className="w-full rounded-lg"
                        controls={false}
                        autoPlay={true}
                        playsInline={true}
                        muted
                        loop
                    >
                        <source src="/video/givemeyesterday/finalfinalparallax.webm" type="video/webm"/>
                        <source src="/video/givemeyesterday/finalfinalparallax.mov" type="video/mp4"/>

                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="col-start-1 lg:col-start-2 col-span-4 flex flex-col justify-end mt-8 lg:mt-0">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10 lg:w-2/4">
                        HOVER TO VIEW AN IMAGE IN FULL
                    </h1>
                    <p className="font-neuehaasunica mt-5 lg:w-3/4">
                        By hovering over an image, the visitor is able to expand its size to view the image as a whole.
                        To better implement the concept of large scale shifts and figure and ground, the background will
                        shrink while the content is pushed to the side as the image expands.
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
                        <source src="/video/givemeyesterday/finalfinalscale.webm" type="video/webm"/>
                        <source src="/video/givemeyesterday/finalfinalscale.mov" type="video/mp4"/>

                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
            <hr className="border-t border-black w-full mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-2">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        INITIAL
                        EXPLORATIONS
                    </h1>
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4">
                    <p className="font-neuehaasunica mt-5 lg:mt-0">
                        During our process, we realized we were experimenting with interaction design separately
                        from
                        visual design, which hindered unity and made it difficult to justify design decisions.
                        To
                        address this, we explored additional precedents to better align our interactions with
                        the core
                        elements of our art direction.
                    </p>
                </div>

                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-8 mt-16 lg:mt-32">
                    <div className="flex flex-col lg:flex-row lg:gap-x-3 gap-y-7">
                        <div>
                            <Image
                                src="/img/givemeyesterday/typeseperation.png"
                                alt="First Ideation"
                                layout="responsive"
                                className="rounded-lg"
                                width={995} // Set the original width of the SVG
                                height={648} // Set the original height of the SVG
                            />
                            <h4 className="font-favoritmono text-h4mono uppercase text-center mt-5">
                                Type seperation
                            </h4>
                        </div>
                        <div>
                            <Image
                                src="/img/givemeyesterday/scaledtype.png"
                                alt="Second Ideation"
                                layout="responsive"
                                className="rounded-lg"
                                width={983} // Set the original width of the SVG
                                height={647} // Set the original height of the SVG
                            />
                            <h4 className="font-favoritmono text-h4mono uppercase text-center mt-5">
                                Scaled type
                            </h4>
                        </div>
                        <div>
                            <Image
                                src="/img/givemeyesterday/halftonestoconceal.png"
                                alt="Third Ideation"
                                layout="responsive"
                                className="rounded-lg"
                                width={983} // Set the original width of the SVG
                                height={647} // Set the original height of the SVG
                            />
                            <h4 className="font-favoritmono text-h4mono uppercase text-center mt-5">
                                Halftones to conceal
                            </h4>
                        </div>

                    </div>

                </div>
            </section>
            <hr className="border-t border-black w-full mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-2">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        COMBINING APPROACHES
                    </h1>
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4">
                    <p className="font-neuehaasunica mt-5 lg:mt-0">
                        We decided to move forward with the second direction and implemented elements from the third
                        direction like the interesting page transitions and interactive circular cursor. I guided the
                        final interaction designs to achieve this sense of harmony.
                    </p>
                </div>

                <div className="lg:col-start-3 lg:col-span-8 col-start-1 col-span-4 mt-32 row-start-3 lg:row-start-2">
                    <Image
                        src="/img/givemeyesterday/transitioniteration.svg"
                        alt="First Ideation"
                        layout="responsive"
                        className="rounded-lg lg:visible invisible"
                        width={3026} // Set the original width of the SVG
                        height={671} // Set the original height of the SVG
                    />
                </div>
                <div className="lg:col-start-3 lg:col-span-8 col-start-1 col-span-4 mt-32 row-start-3 lg:row-start-3 lg:absolute">
                    <Image
                        src="/img/givemeyesterday/transitioniterationmobile.svg"
                        alt="First Ideation"
                        layout="responsive"
                        className="rounded-lg visible lg:invisible"
                        width={391} // Set the original width of the SVG
                        height={589} // Set the original height of the SVG
                    />
                </div>
            </section>


            <hr className="border-t border-black w-full mt-28"/>

            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-2">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        TYPOGRAPHY CHOICE
                    </h1>
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4">
                    <p className="font-neuehaasunica mt-5 lg:mt-0">
                        I chose Neue Haas Grotesk due to its clean, modern sans-serif typeface with neutral letterforms
                        that offer a timeless and versatile appearance. Its balanced proportions and minimal contrast
                        create a harmonious visual flow, making it suitable for both body text and headlines.
                    </p>
                </div>

                <div className="lg:col-start-3 lg:col-span-8 col-start-1 col-span-4 mt-16 lg:mt-32">
                    <Image
                        src="/img/givemeyesterday/typescale.png"
                        alt="First Ideation"
                        layout="responsive"
                        className="rounded-lg"
                        width={1118} // Set the original width of the SVG
                        height={660} // Set the original height of the SVG
                    />
                </div>
            </section>


            <hr className="border-t border-black w-full mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-2">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        COLOUR CATEGORIZATION
                    </h1>
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4">
                    <p className="font-neuehaasunica mt-5 lg:mt-0">
                        Using a near tertiary colour palette of yellow with energetic cool tones, we created colour
                        coordinated subsections for different sections of the exhibitions. This creates a sense of unity
                        when scrolling through related works and a clear shift from one section to another. The yellow
                        creates a sense of consistency throughout the entire site even as the other colour changes.
                    </p>
                </div>

                <div className="lg:col-start-3 lg:col-span-8 col-start-1 col-span-4 mt-16 lg:mt-32"><Image
                    src="/img/givemeyesterday/colourcategorization.svg"
                        alt="First Ideation"
                        layout="responsive"
                        className="rounded-lg"
                        width={1117} // Set the original width of the SVG
                        height={1225} // Set the original height of the SVG
                    />
                </div>
            </section>
            <hr className="border-t border-black w-full mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-2">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        POSTER ITERATION </h1>
                </div>

                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-8 mt-16 lg:mt-32">
                    <Image
                        src="/img/givemeyesterday/posteriteration.png"
                        alt="First Ideation"
                        layout="responsive"
                        className="rounded-lg"
                        width={1117} // Set the original width of the SVG
                        height={1225} // Set the original height of the SVG
                    />
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
                        If I could go back, I would have definitely explored more ways to enhance the artists&#39; page,
                        not
                        just through additional interactions, but by incorporating thoughtful content that could elevate
                        the experience of the pre-exhibition site. The team faced tight deadlines, which limited our
                        ability to experiment as much as we would have liked.

                    </p>
                    <p className="mt-5 font-neuehaasunica">
                        Crafting this visual identity was a journey of exploration that not only honed my skills in
                        visual and digital design but also expanded my overall perspective on design. It made me
                        recognize that design isn&#39;t confined to the present; it draws inspiration from the past and
                        shapes the future. The prospect of inspiring others through our creations adds an intriguing
                        dimension to this experience.
                    </p>
                </div>
            </section>

        </main>

    );
}
