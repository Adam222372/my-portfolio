"use client"
import { useState } from "react";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Button } from "@/components/ui/button";

type NavMobileProps = {
    dictionary: any,
    lang: String
}


export default function NavMobile({dictionary, lang}: NavMobileProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button className="bi bi-list text-[32px] cursor-pointer ml-5" onClick={() => setIsOpen(!isOpen)}></button>
            {isOpen && (
                <div className="flex fixed h-screen w-full flex-col bg-real-black text-lg font-semibold overflow-hidden bg-fixed">
                    <Link href={`/${lang}/`} className="my-4">Home</Link>
                    <Link href={`/${lang}/project`} className="my-4">Project</Link>
                    <Link href={`/${lang}/contact`} className="my-4">
                        <Button className="rounded-xl cursor-pointer bg-electric-blue text-white text-[16px] hover:bg-electric-blue/70 p-4 py-5">
                            Contact me
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
}