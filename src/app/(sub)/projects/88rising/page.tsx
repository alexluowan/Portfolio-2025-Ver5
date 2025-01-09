import Image from "next/image";
import ContentItem from "../../../components/ContentItem";

export default function Home() {
    return (
        <div className="">
            <main>
                <section className="grid grid-cols-12 gap-x-5 py-8 mx-5">
                    <div className="col-start-3 col-span-8">
                        <h1 className="font-offbit text-h1 uppercase leading-10">
                            Reimagining 88risings website experience for fans to engage with their favourite artists and
                            stay informed.
                        </h1>
                        <p className="font-neuehaasunica text-xl mt-8">
                            As part of my studies, my classmates and I were tasked with identifying a client facing a
                            business problem, describing that problem, and crafting a solution. This 7-week experience
                            design project required us to develop a tailored intervention to address the client’s needs.
                            I was responsible for conducting user research, finalizing the interaction designs, and
                            facilitating a design sprint.
                        </p>
                        <p className="mt-5 text-xl">
                            This project is not associated with 88rising. It was created as a mock client for an
                            academic assignment.
                        </p>
                        <div className="flex flex-row mt-10 gap-x-16">
                            <div className="flex flex-col w-3/5">
                                <div>
                                    <h4 className="font-favoritmono text-h4mono">YEAR & DURATION</h4>
                                    <p className="font-neuehaasunica text-xl">
                                        2023 - 7 Weeks
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-4/5 ">
                                <div>
                                    <h4 className="font-favoritmono text-h4mono">MY ROLE</h4>
                                    <p className="font-neuehaasunica text-xl">
                                        Lead Interaction Designer, Prototyping, Visual Designer, Facilitator, Mobile
                                        Designer
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-4/5">
                                <div>
                                    <h4 className="font-favoritmono text-h4mono">TEAM MEMBERS</h4>
                                    <p className="font-neuehaasunica text-xl">
                                        Claret Egwim-Nwagbara, Justin Yu, Luke Do, Terrence Xu
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-3/5">
                                <div>
                                    <h4 className="font-favoritmono text-h4mono">TOOLS</h4>
                                    <p className="font-neuehaasunica text-xl">
                                        Figma, After Effects, Premiere Pro, Google Surveys
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className="border-t border-black w-full mt-16"/>

                <div className="relative">
                    {/* SVG Section */}
                    <div className="pr-52 mt-40">
                        <Image
                            src="/img/88rising/statistics.svg"
                            alt="Statistics Icon"
                            layout="responsive"
                            width={1208} // Set the original width of the SVG
                            height={570} // Set the original height of the SVG
                        />
                    </div>

                    {/* Quote Section */}
                    <div className="absolute top-0 right-0 z-10 grid grid-cols-12 gap-x-5 pt-40 mx-5">
                        <div className="col-start-8 col-span-4 text-right" dir="rtl">
                            <div className="flex flex-col gap-y-5">
                                <div>
                                    <h3 className="font-neuehaasunica text-3xl italic" dir="ltr">
                                        “For Asians and Asian Americans and just Asian youth globally, there’s no real home on
                                        the Internet,
                                        or a company consistently putting out things that either include Asian talent or
                                        Asian viewpoints
                                        in stories.”
                                    </h3>
                                </div>
                                <div>
                                    <h4 className="font-favoritmono text-xl uppercase" dir="ltr">
                                        CEO & Founder of 88rising - Sean Miyashiro
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<hr className="border-t border-black w-full"/>*/}
                {/*<section className="grid grid-cols-12 gap-x-5 py-8 mx-5">*/}

                {/*</section>*/}
            </main>
        </div>
    )
        ;
}
