import GridItem from "../components/GridItem";
import { Particles } from "../components/magicui/partiles";
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
            <div className="flex justify-center">
                <DotPattern cr={1} fadeEdges={true} className=" h-screen w-full">
                    <div>
                        <h1>Design <span className="text-electric-blue">With</span> Sence</h1>
                        <p>Made by Adam Holecek</p>
                    </div>
                </DotPattern>
            </div>
        </div>
    )
}