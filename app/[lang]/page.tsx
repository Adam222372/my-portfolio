import GridItem from "../components/GridItem";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params;
    if (lang !== "en" && lang !== "cs") {
        throw new Error(`Unsupported language: ${lang}`);
    }
            <GridItem lang={lang as "en" | "cs"}></GridItem>
    return(
        <div>
            <GridItem lang={lang}></GridItem>
        </div>
    )
}