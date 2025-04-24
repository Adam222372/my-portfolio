import Link from "next/link";
import { Button } from "@/components/ui/button";

type MenuBarProps = {
    dictionary: any; // You can replace `any` with your dictionary type if available
    lang: "cs" | "en";
};

export default function MenuBar({ dictionary, lang }: MenuBarProps) {
    return (
        <div style={{ borderBottomColor: "var(--color-luxury-gray)" }} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[10px] bg-real-black/70 border-b-luxury-gray border-b-2">
            <div className="flex items-center justify-between px-8 m-4">
                <Link href={`/${lang}`} className="text-[16px] font-bold">Adam Holeček</Link>

                <div className="flex items-center space-x-2 text-[16px]">
                    <Link href={`/${lang}`} className="rounded-full p-1 px-4 hover:bg-gray-400 transition">
                        {dictionary.navbar.home}
                    </Link>
                    <Link href={`/${lang}/project`} className="rounded-full p-1 px-4 hover:bg-gray-400 transition">
                        {dictionary.navbar.projects}
                    </Link>
                </div>
                <Link href={`/${lang}/contact`}>
                    <Button className="rounded-xl cursor-pointer bg-electric-blue text-white text-[16px] hover:bg-electric-blue/70 p-4 py-5">
                        {dictionary.navbar.contactMe}
                    </Button>
                </Link>
            </div>
        </div>
    );
}