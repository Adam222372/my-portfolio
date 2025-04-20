import { DotPattern } from "../components/magicui/dot-pattern";
import { cn } from "../../lib/utils";
import React from "react";
import { getDictionary } from "../../dictionaries/getDictionary";
import Image from "next/image";

export function generateStaticParams() {
    return [
        { lang: "en" },
        { lang: "cs" },
    ];
}

export default async function Page({
    params,
}: {
    params: Promise<{ lang: string }>;
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
                <div className="text-center backdrop-blur-xs rounded-lg p-4 bg-real-black/50 tracking-[-3px] w-[100%] md:w-[80%] lg:w-[60%] ">
                    <h1 className="text-[96px]/25 flex flex-col font-semibold">
                        {dictionary.heading.first}
                        <span className="text-electric-blue tracking-[-5px] font-medium">
                            {dictionary.heading.middle}
                        </span>{" "}
                        {dictionary.heading.last}
                    </h1>
                    <p className="m-4 py-4 tracking-[0.1em] text-xl ">
                        {dictionary["heading-description"]}
                    </p>
                </div>
            </div>
            <div className="bg-[linear-gradient(to_bottom,_#0a0a0a_0%,_#171717_10%,_#252525_100%)] bg-cover bg-no-repeat bg-center h-[1000px] flex flex-col items-center justify-center">
                <div className="bg-jet-black shadow-electric-blue/50 shadow-2xl w-[700px] h-[400px] rounded-lg flex flex-col m-12">
                    <div className="flex">
                        <Image alt="profile picture" src={"/profile.png"} width={30} height={30} className="mr-8 rounded-3xl ce"></Image>
                        <h3 className="font-semibold ">About Me</h3>
                    </div>
                    <p></p>
                </div>
            </div>

        </div>
    );
}