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
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center my-30">
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
                    )}
                ></DotPattern>
                <div className="text-center backdrop-blur-xs rounded-lg p-4 bg-real-black/50 tracking-[-2px] w-[100%] md:w-[80%] lg:w-[60%]">
                    <h1 className="text-[96px]/25 font-semibold">
                        <span className="bg-gradient-to-r from-white to-[#4896B5] font-bold italic bg-clip-text text-transparent">
                            Modern
                        </span>
                        <br />
                        Websites for
                        <br />
                        <span className="font-bold text-electric-blue"> Bold </span>
                        Brands
                        <span className=" text-electric-blue">.</span>
                    </h1>
                    <p className="m-4 py-4 tracking-[0.1em] text-xl ">
                        {dictionary["heading-description"]}
                    </p>

                </div>
            </div>
            <div className="bg-[linear-gradient(to_bottom,_#0a0a0a_0%,_#171717_10%,_#252525_100%)] bg-cover bg-no-repeat bg-center h-[1000px] flex flex-col items-center justify-center">
                <div className="bg-jet-black shadow-electric-blue/50 shadow-2xl w-[700px] h-[400px] rounded-lg flex flex-col m-8">
                    <div className="flex p-4">
                        <Image alt="profile picture" src={"/profile.png"} width={80} height={80} className={"mr-8 rounded-full"} unoptimized></Image>
                        <h2 className="font-bold text-2xl self-center">About Me</h2>
                    </div>
                    <p className="p-4">ahoj jak se mas</p>
                </div>
            </div>

        </div>
    );
}