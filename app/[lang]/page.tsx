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
            <div className="flex flex-col items-center justify-center h-screen">
                <DotPattern cr={1} fadeEdges={true} className="absolute top-0 left-0 right-0 bottom-0">
                    <div>
                        <h1>Design With Sence</h1>
                        <p>Made by Adam Holecek</p>
                    </div>
                </DotPattern>
            </div>
        </div>
    )
}