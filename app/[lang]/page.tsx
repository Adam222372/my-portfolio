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

            <div className="relative flex h-[500px] top-[100px] w-full flex-col items-center justify-center">
                <DotPattern className={cn(
                    "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
                )}>
                </DotPattern>
                <div className="text-center backdrop-blur-xs rounded-lg p-4 bg-real-black/50 w-[100%] md:w-[80%] lg:w-[60%] ">
                    <h1 className="text-[96px]/24 flex flex-col font-semibold">Development <span className="text-electric-blue italic font-normal">With</span> Sence</h1>
                    <p className="m-4 pt-4 tracking-[.2em] text-xl ">Made by Adam Holeček</p>
                </div>
                
            </div>
        </div>
    )
}