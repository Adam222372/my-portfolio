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
        <div className={"flex items-center  justify-between fixed top-0 left-0 right-0 z-50 p-8 "}>
            <Link href={"/"} className="text-[16px] font-semibold">Adam Holeček</Link>

            <div className="flex items-center space-x-2">
                <Link href="/" className="rounded-full p-1 px-2 hover:bg-gray-400 transition">
                    {dictionary.navbar.home}
                </Link>
                <Link href="/project" className="rounded-full p-1 px-2 hover:bg-gray-400 transition">
                    {dictionary.navbar.projects}
                </Link>
            </div>
            <Link href={"/contact"}>
            <Button className="rounded-xl cursor-pointer bg-electric-blue text-white hover:bg-electric-blue/70">Contact me</Button>
            </Link>
        </div>

    )
}