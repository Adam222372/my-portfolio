import { useState } from "react";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Button } from "@/components/ui/button";

type MenuListProps = {
    dictionary: any, 
    lang: String
}


export function MenuList({ dictionary, lang }: MenuListProps) {
    const [open, setOpen] = useState(false)

    return (
        <nav>
            <i className="bi bi-list" onClick={() => setOpen(!open)}></i>
            {open && (
                <div>
                    <div className="Flex flex-col bg-black/50 text-lg font-semibold">
                        <Link href={`/${lang}/`}>Home</Link>
                        <Link href={`/${lang}/project`}>Project</Link>
                        <Link href={`/${lang}/contact`}>
                            <Button className="rounded-xl cursor-pointer bg-electric-blue text-white text-[16px] hover:bg-electric-blue/70 p-4 py-5">
                                {dictionary.navbar.contactMe}
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}