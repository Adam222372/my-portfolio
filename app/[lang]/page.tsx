import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import React from "react";
import { getDictionary } from "./dictionaries"
import Image from "next/image";

export default async function Page({
    params,
}: {
    params: Promise<{ lang: "cs" | "en" }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div>
            <div className="relative flex flex-col items-center justify-center  h-screen">
                <DotPattern className={cn("[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]")}></DotPattern>
                <div className="text-center backdrop-blur-xs rounded-[30px] bg-space-black/50 tracking-[-1px] w-[85%] sm:w-[75%] md:w-[80%] lg:w-[65%] m-6 shadow-2xl shadow-electric-blue/40 xl:w-[70%] ">
                    <h1 className="text-[36px]/10 font-semibold md:text-[80px]/25 lg:text-[90px]/25 p-12 md:p-14">
                        <span className="bg-gradient-to-r from-white via-sky-200 to-[#4896B5] font-bold  bg-clip-text text-transparent">
                            Modern
                        </span>
                        <br />
                        Websites for
                        <br />
                        <span className="font-bold text-electric-blue"> Bold </span>
                        Brands
                        <span className=" text-electric-blue">.</span>
                    </h1>
                </div>
            </div>
            <div className="bg-[linear-gradient(to_bottom,_#0a0a0a_0%,_#171717_10%,_#252525_100%)] flex flex-col items-center justify-center">
                <div className="bg-jet-black shadow-electric-blue/50 shadow-2xl w-[300px] h-[300px] rounded-lg flex flex-col m-8 md:w-[500px] lg:w-[700px] sm:w-[500px]">
                    <div className="flex p-4">
                        <Image alt="profile picture" src={"/profile.png"} width={80} height={80} className={"mr-8 rounded-full"}></Image>
                        <h2 className="font-bold text-2xl self-center">About Me</h2>
                    </div>
                    <p className="p-4">text</p>
                </div>
                <div className="sticky">
                <ul>
                    <li>cvgcvb</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            </div>
        </div>
    );
}