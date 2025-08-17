import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { lang: "cs" | "en" } }) {
    const { lang } = params;
    return (
        <div className="mt-30">
            <div className="relative flex flex-col items-center justify-center ">
                <DotPattern className={cn("[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]")}></DotPattern>
                <div className="text-center backdrop-blur-xs bg-space-black/30 rounded-[30px] w-[85%] sm:w-[70%] md:w-[80%] lg:w-[70%] xl:w-[55%]">
                    <h1 className="text-[36px]/10 font-semibold md:text-[80px]/25 lg:text-[90px]/25 p-4 tracking-[-2px]">
                        <span className="bg-gradient-to-r from-[#4896B5] from-25% to-white to-40% font-bold  bg-clip-text text-transparent">
                            Modern
                        </span>
                        <br />
                        Websites for
                        <br />
                        <span className="font-bold text-electric-blue"> Bold </span>{' '}
                        Brands
                        <span className=" text-electric-blue">.</span>
                    </h1>
                    <div className="m-6 ">
                        <Link href={`/${lang}/contact`} className="bg-electric-blue rounded-xl text-base md:text-xl p-2.5 font-semibold">Let's build your project!</Link>
                    </div>
                </div>

            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="bg-jet-black shadow-electric-blue/50 shadow-2xl w-[300px] h-[300px] rounded-lg flex flex-col m-8 md:w-[500px] lg:w-[700px] sm:w-[500px]">
                    <div className="flex p-4">
                        <Image alt="profile picture" src={"/profile.png"} width={80} height={80} className={"mr-8 rounded-full"}></Image>
                        <h2 className="font-bold text-2xl self-center">About Me</h2>
                    </div>
                    <p className="p-4">text</p>
                </div>
                <div className="sticky">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}