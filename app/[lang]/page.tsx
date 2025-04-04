"use client"
import GridItem from "../components/GridItem";
import { FlickeringGrid } from "../components/magicui/flickering-grid";
import { Button } from "@/components/ui/button";
import { Particles } from "../components/magicui/partiles";

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
                <BentoGrid children={undefined}></BentoGrid>
            </Particles>

        </div>
    )
}