import { useState, useEffect } from "react";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Button } from "@/components/ui/button";
import React from "react";
import {usePathname} from 'next/navigation';

type MenuListProps = {
    dictionary: any, 
    lang: String
}




export function MenuList({ dictionary, lang }: MenuListProps) {
    const [open, setOpen] = useState(false)
    const activeURL = usePathname();

    return (
        <nav>
            <i className="bi bi-list" onClick={() => setOpen(!open)}></i>
            {open && (
                <div>
                    <div className="Flex flex-col bg-black/50 text-lg font-semibold">
                        <Link href={`/${lang}/`}>Home</Link>
                        <Link href={`/${lang}/project`} onClick={() => setOpen(false)}>Project</Link>
                        <Link href={`/${lang}/contact`} onClick={() => setOpen(false)}>
                            <Button className="rounded-xl cursor-pointer bg-electric-blue text-white text-[16px] hover:bg-electric-blue/70 p-4 py-5" onClick={() => setOpen(false)}>
                                {dictionary.navbar.contactMe}
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}