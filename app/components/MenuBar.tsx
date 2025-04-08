import Link from "next/link";
import { getDictionary } from "../dictionaries";

interface LocalizedContentProps {
    lang: "en" | "cs";
}

export default async function MenuBar({ lang }: { lang: string }) {
    const dictionary = await getDictionary(lang as "en" | "cs");

    return (
        <nav className={"flex justify-between items-center space-x-8 mt-10 bg-gray-800 shadow-xl ring-gray-900/5 p-4 rounded-lg"}>
            <Link href={"/"} className="">Adam Holeček</Link>
            <div>
                <Link href={"/"}>{dictionary.navbar.home}</Link>
                <Link href={"/project"}>Project</Link>
                <Link href={"/contact"}>{dictionary.navbar["contact-me"]}</Link>
            </div>
        </nav>
    )
}