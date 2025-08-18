import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type NavDesktopProps = {
    dictionary: any; 
    lang: "cs" | "en";
};

export default function NavDesktop({ dictionary, lang }: Readonly<NavDesktopProps>) {
    return (
        <div>
            <div className="flex items-center justify-between px-8 m-4">
                <Link href={`/${lang}`}><Image height={60} width={60} src="logo.svg" alt="Logo"/></Link>

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