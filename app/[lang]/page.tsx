import GridItem from "../components/GridItem";
import { Particles } from "../components/magicui/partiles";
import { getDictionary } from "@/dictionaries/getDictionary";

export default async function Page({
    params,
}: {
    params: Promise<{ lang: "en" | "cs" }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div>
           
        </div>
    )
}