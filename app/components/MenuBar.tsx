//import { usePathname } from 'next/navigation'
import Link from "next/link";
import { getDictionary } from "../dictionaries";
import { Button } from "@/app/components/ui/button"


export default async function MenuBar({ lang }: { lang: string }) {
    const dictionary = await getDictionary(lang as "en" | "cs");
    //const path = usePathname();
    const pathNames = [
        "/",
        "/project",
        "/contact"
    ]

    return (
        <div className={"flex items-center m-4 justify-between"}>
            <Link href={"/"} className="text-[16px]">Adam Holeček</Link>

            <div className="flex items-center space-x-2">
                <Link href="/" className="rounded-full p-1 px-2 hover:bg-gray-400 transition">
                    {dictionary.navbar.home}
                </Link>
                <Link href="/project" className="rounded-full p-1 px-2 hover:bg-gray-400 transition">
                    {dictionary.navbar.projects}
                </Link>
            </div>

            <Button className="rounded-xl cursor-pointer bg-white text-black hover:bg-gray-400"><Link href={"/contact"}>Contact me</Link></Button>
        </div>

    )
}