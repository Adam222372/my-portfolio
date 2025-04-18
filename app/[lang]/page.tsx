import { DotPattern } from "../components/magicui/dot-pattern";
import { cn } from "../../lib/utils";
import React from "react";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { lang: string } }) {
    //const { lang } = params;

    return (
        <div>
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center my-30">
                <DotPattern className={cn(
                    "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
                )}>
                </DotPattern>
                <div className="text-center backdrop-blur-xs rounded-lg p-4 bg-real-black/50 tracking-[-3px] w-[100%] md:w-[80%] lg:w-[60%] ">
                    <h1 className="text-[96px]/25 flex flex-col font-semibold">Meaningful<span className="text-electric-blue tracking-[-5px] font-medium">Development</span></h1>
                    <p className="m-4 py-4 tracking-[0.1em] text-xl ">Made by Adam Holeček</p>
                </div>
            </div>
            <div className="bg-[linear-gradient(to_bottom,_#0a0a0a,_#171717_10%,_#252525_100%)] bg-cover bg-no-repeat bg-center h-[500px]">
                   
            </div>
        </div>
    )
}