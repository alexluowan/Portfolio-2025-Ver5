import ResponsiveImage from "@/src/app/components/ResponsiveImage";

import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Wise Split Bill Feature",
    description: "Generated by create next app",
};

export default function Home() {
    return (
        <main>
            <ResponsiveImage
                desktopSrc="/img/wise/wisethumbnail.png"
                mobileSrc="/img/wise/wisethumbnail.png"
                alt="An Image Showcasing an App"
            />
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5">
                <div className="col-start-1 col-span-full lg:col-start-3 lg:col-span-8">
                    <h1 className="font-offbit text-h1 uppercase leading-10">
                        Splitting group expenses across different countries and currencies.
                    </h1>
                    <p className="font-neuehaasunica mt-8">
                        Wise makes international payments simple, but it dosen’t help when people need to split and
                        settle costs across borders. This is an exploration on how Wise could introduce a lightweight,
                        integrated bill-splitting feature so that users don’t need to jump between apps or manually
                        track expenses.
                    </p>
                    <p className="font-neuehaasunica  mt-5">
                        This project is not associated with the company Wise. It was done as a personal design exercise.
                    </p>
                    <div className="flex flex-col md:flex-row mt-10 gap-8 md:gap-x-16">
                        <div className="flex flex-col w-full md:w-3/5">
                            <div>
                                <h4 className="font-favoritmono text-h4mono">YEAR & DURATION</h4>
                                <p className="font-neuehaasunica ">
                                    2025 - 1 Week
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-4/5 ">
                            <div>
                                <h4 className="font-favoritmono text-h4mono">MY ROLE</h4>
                                <p className="font-neuehaasunica "> UI Designer
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-4/5">
                            <div>
                                <h4 className="font-favoritmono text-h4mono">TEAM MEMBERS</h4>
                                <p className="font-neuehaasunica ">
                                    Myself </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-3/5">
                            <div>
                                <h4 className="font-favoritmono text-h4mono">TOOLS</h4>
                                <p className="font-neuehaasunica">
                                    Figma, Jitter
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="border-t border-black w-full mt-16"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-3 col-span-4 lg:col-span-2">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10">
                        BUSINESS OPPORTUNITY
                    </h1>
                </div>
                <div className="col-start-1 lg:col-start-7 col-span-4">
                    <p className="mt-5 lg:mt-0 font-neuehaasunica">
                        58% of Millennials and Gen Z split bills at least once a week (NASDAQ, 2022). While Wise has
                        become the go-to for international money transfers, it doesn’t support group expense flows —
                        forcing users to track shared costs elsewhere, even when they use Wise to settle.
                        This gap represented a missed opportunity to deepen engagement and make Wise the default for all
                        peer-to-peer payments, not just individual transfers. To address these gaps, I explored a
                        lightweight Split Bill feature designed to minimize manual work and remove friction.
                    </p>
                </div>

            </section>
            <hr className="border-t border-black w-full mt-28"/>
            <section className="grid grid-cols-4 lg:grid-cols-12 gap-x-5 py-8 mx-5 mt-10 lg:mt-28">
                <div className="col-start-1 lg:col-start-2 col-span-4 flex flex-col justify-end mt-8 lg:mt-0">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10 lg:w-2/4 uppercase">
                        Sending a Split (Borrower)
                    </h1>
                    <p className="font-neuehaasunica mt-5 lg:w-3/4">
                        The borrower flow simplifies splitting by defaulting to even splits and minimizing setup time. A
                        quick review screen helps users confirm details without slowing them down, supporting fast,
                        confident bill splitting directly from the Payments hub.
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
                        <source src="/video/wise/borrowerflow.mp4" type="video/webm"/>
                        <source src="/video/wise/borrowerflow.mp4" type="video/mp4"/>

                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="col-start-1 lg:col-start-2 col-span-4 flex flex-col justify-end mt-8 lg:mt-0">
                    <h1 className="font-offbit text-3xl lg:text-h1 leading-10 lg:w-2/4 uppercase">
                        Paying a Split (Recipient)
                    </h1>
                    <p className="font-neuehaasunica mt-5 lg:w-3/4">
                        The recipient flow focuses on immediate clarity and ease of payment. Request tasks surface on
                        the home screen, and users can settle their share with a single tap, reinforced by real-time
                        confirmation to build trust and reduce friction.
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
                        <source src="/video/wise/recipient.mp4" type="video/webm"/>
                        <source src="/video/wise/recipient.mp4" type="video/mp4"/>

                        Your browser does not support the video tag.
                    </video>
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
                        Even though this was mainly a mobile design thought exercise, it pushed me to map out more than
                        one flow. Crafting both borrower and recipient journeys made me surface “what if” scenarios and
                        edge cases from the start, showing that a smooth experience comes from tackling complexity
                        before the user ever sees it.

                    </p>
                </div>
            </section>
            <footer className="col-start-1 lg:col-span-6 mt-36"></footer>

        </main>

    );
}
