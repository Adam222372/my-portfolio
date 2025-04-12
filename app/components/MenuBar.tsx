import Link from "next/link";
import { getDictionary } from "../dictionaries";
import {Button} from "@/app/components/ui/button"


export default async function MenuBar({ lang }: { lang: string }) {
    const dictionary = await getDictionary(lang as "en" | "cs");

    return (
        
            <div className={"flex justify-between items-center bg-neutral-500 mt-2 p-4 rounded-xl w-35 mx-auto"}>
                <Link href={"/"}>{dictionary.navbar.home}</Link>
                <Link href={"/project"}>Project</Link>
                
            </div>

    )
}