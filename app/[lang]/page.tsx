import GridItem from "../components/GridItem";
import { Particles } from "../components/magicui/partiles";
import { getDictionary } from "@/dictionaries/getDictionary";

export default async function Page({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    if (lang !== "en" && lang !== "cs") {
        throw new Error(`Unsupported language: ${lang}`);
    }

    return (
        <div>
            <Particles className="">
                <GridItem lang={lang}></GridItem>
            </Particles>
        </div>
    )
}