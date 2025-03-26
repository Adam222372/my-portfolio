import {getDictionary} from "../dictionaries";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dictionary = await getDictionary(lang as "en" | "cs")
    return(
        <h1>{dictionary.aboutme.title}</h1>
    )
}