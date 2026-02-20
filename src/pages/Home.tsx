import React, { useEffect, useRef, useState } from "react"; import homepage_hero_animation from "../assets/videos/homepage-hero-animation.mp4"
import desktop_HomepageHero_compressed_v007_650 from "../assets/videos/Desktop_HomepageHero_compressed_v007_650.mp4"
import figma_photo from "../assets/svg/Figma-logo-color.svg";
import openAI_photo from "../assets/svg/OpenAI-black-wordmark-cropped.avif";
import ramp_photo from "../assets/svg/ramp.avif";
import cursor_photo from "../assets/svg/LOCKUP_HORIZONTAL_2D_LIGHT_1.svg";
import vercel_photo from "../assets/svg/vercel.svg";
import nvidia_photo from "../assets/svg/NVIDIA-logo.avif";
import volvo_photo from "../assets/svg/volvo.avif";
import perplexity_photo from "../assets/svg/Perplexity_AI_logo.svg.png";

const Home: React.FC = () => {

    useEffect(() => {
        document.title = "The AI workspace that works for you. | Notion";
    }, []);

    const borderRef = useRef<HTMLDivElement>(null);
    const [isStuck, setIsStuck] = useState(false);

    useEffect(() => {
        const sentinel = document.createElement("div");
        sentinel.style.height = "1px";
        borderRef.current?.parentElement?.insertBefore(sentinel, borderRef.current);

        const observer = new IntersectionObserver(
            ([entry]) => {
                // When sentinel is NOT visible, the sticky element is stuck at bottom
                setIsStuck(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        observer.observe(sentinel);

        return () => {
            observer.disconnect();
            sentinel.remove();
        };
    }, []);
    return (
        <div className="z-10">
            <section className="flex flex-col px-30 items-center text-7xl relative">
                {/* videos session */}
                <div className="w-3xl items-center h-45 overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-full block object-cover"
                    >
                        <source src={homepage_hero_animation} type="video/mp4" />
                    </video>
                </div>
                <div className="h-0.5 w-full -m-0.5 bg-white "></div>
                <header className="text-center">
                    <h1 className="text-7xl py-2.5 font-bold">One workspace. <br />Zero busywork.</h1>
                    <h2 className="py-2.5 text-xl">Notion is where your teams and AI agents capture knowledge, find<br className="hidden xl:block" /> answers, and automate projects. Now a team of 7 feels like 70.</h2>
                    <div className="py-2.5 text-lg *:px-2.5 *:py-2.5 *:mx-2.5 *:rounded-lg">
                        <button className="bg-blue-600 text-white">Get Notion free</button>
                        <button className="bg-blue-100 text-blue-700">Request a demo</button>
                    </div>
                </header>
                {/* videos session*/}
                <div className="py-2.5">
                    <video
                        src={desktop_HomepageHero_compressed_v007_650}
                        className="block  w-7xl h-auto object-cover"
                    >

                    </video>
                </div>
                {/* Trusted by top teams */}
                <div ref={borderRef} className={`sticky bottom-0 flex w-7xl h-14 items-center justify-center bg-white ${isStuck ? "border-t border-gray-300" : ""}`}>
                    <div>
                        <p className="text-sm pr-10">Trusted by top teams</p>
                    </div>
                    <div className={"" + "[&>*>img]:h-5 *:px-4 flex"}>
                        <div>
                            <img src={figma_photo} alt="" />
                        </div>
                        <div>
                            <img src={openAI_photo} alt="" />
                        </div>
                        <div>
                            <img src={ramp_photo} alt="" />
                        </div>
                        <div>
                            <img src={cursor_photo} alt="" />
                        </div>
                        <div>
                            <img src={vercel_photo} alt="" />
                        </div>
                        <div>
                            <img src={nvidia_photo} alt="" />
                        </div>
                        <div>
                            <img src={volvo_photo} alt="" />
                        </div>
                        <div>
                            <img src={perplexity_photo} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            more...
        </div>
    )
}

export default Home;