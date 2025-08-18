import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import React from "react";
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
                    <div className="m-6">
                        <Link href={`/${lang}/contact`} className="bg-electric-blue rounded-xl text-base md:text-xl p-3 font-semibold">Let's build your project!</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}