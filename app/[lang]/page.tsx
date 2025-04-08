import GridItem from "../components/GridItem";
import { Particles } from "../components/magicui/partiles";
import { getDictionary } from "@/dictionaries/GetDictionary";

export default async function Page({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params;
    if (lang !== "en" && lang !== "cs") {
        throw new Error(`Unsupported language: ${lang}`);
    }
    <Particles>
        <GridItem lang={lang as "en" | "cs"}></GridItem>
    </Particles>

    return (
        <div>
            <Particles className="">
                <GridItem lang={lang}></GridItem>
            </Particles>
        </div>
    )
}