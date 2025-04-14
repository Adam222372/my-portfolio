import { getDictionary } from "@/dictionaries/getDictionary";
import { DotPattern } from "../components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

export default async function Page({
    params,
}: {
    params: Promise<{ lang: "en" | "cs" }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div>

            <div className="relative flex h-[500px] top-[150px] w-full flex-col items-center justify-center">
                <DotPattern className={cn(
                    "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
                )}>
                </DotPattern>
                <div className="text-center backdrop-blur-xs rounded-lg p-4 bg-real-black/50 w-[90%] md:w-[60%] lg:w-[40%]">
                    <h1 className="text-[96px]/24 flex flex-col">Design <span className="text-electric-blue italic">With</span> Sence</h1>
                    <p className="m-4 pt-4 tracking-[.1em] text-xl ">Made by Adam Holeček</p>
                </div>

            </div>
        </div>
    )
}