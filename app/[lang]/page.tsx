//import { getDictionary } from "../../dictionaries/getDictionary";
import { DotPattern } from "../components/magicui/dot-pattern";
import { cn } from "../../lib/utils";

export default async function Page({
    params,
}: {
    params: Promise<{ lang: "en" | "cs" }>;
}) {
    const { lang } = await params;
    //const dictionary = await getDictionary(lang);

    return (
        <div>
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center my-30">
                <DotPattern className={cn(
                    "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
                )}>
                </DotPattern>
                <div className="text-center backdrop-blur-xs rounded-lg p-4 bg-real-black/50 tracking-[-1%] w-[100%] md:w-[80%] lg:w-[60%] ">
                    <h1 className="text-[96px]/24 flex flex-col font-semibold">Development <span className="text-electric-blue italic font-medium">Make</span> Sense</h1>
                    <p className="m-4 pt-4 tracking-[3px] text-xl ">Made by Adam Holeček</p>
                </div>
            </div>
            <div className="bg-linear-r from-real-black from-0% via-middle-black via-10% to-space-jet-black to-100% h-screen w-full">
                   edfg
            </div>
        </div>
    )
}