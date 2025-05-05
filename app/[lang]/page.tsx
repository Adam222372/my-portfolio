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
            <div className="relative flex md:h-[500px] h-[400px] w-full flex-col items-center justify-center md:my-30 my-25">
                <DotPattern className={cn("[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]")}></DotPattern>
                <div className="text-center backdrop-blur-xs rounded-2xl p-8 bg-space-black/50 tracking-[-2px] w-[85%] sm:w-[75%] md:w-[80%] lg:w-[65%] m-6 shadow-2xl shadow-electric-blue/40 xl:w-[50%]">
                    <h1 className="text-[45px]/12 font-semibold md:text-[90px]/22 lg:text-[96px]/25">
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
                    
                    <p className=" m-4 md:m-4 md:py-4 tracking-[0.1em] md:text-xl ">
                        {dictionary["heading-description"]}
                    </p>

                </div>
            </div>
            <div className="bg-[linear-gradient(to_bottom,_#0a0a0a_0%,_#171717_10%,_#252525_100%)] bg-cover bg-no-repeat bg-center  flex flex-col items-center justify-center">
                <div className="bg-jet-black shadow-electric-blue/50 shadow-2xl w-[350px] h-[400px] rounded-lg flex flex-col m-8 md:w-[500px] lg:w-[700px] sm:w-[500px]">
                    <div className="flex p-4">
                        <Image alt="profile picture" src={"/profile.png"} width={80} height={80} className={"mr-8 rounded-full"}></Image>
                        <h2 className="font-bold text-2xl self-center">About Me</h2>
                    </div>
                    <p className="p-4">text</p>
                </div>
            </div>

        </div>
    );
}