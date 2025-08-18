"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from 'next/image';

type NavMobileProps = {
    dictionary: any,
    lang: string
}


export default function NavMobile({ dictionary, lang }: Readonly<NavMobileProps>) {
    const currentPathName = usePathname(); 
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen])

    useEffect(() => {
        setIsOpen(false);
    }, [currentPathName])



    return (
        <div>
            <div className="flex justify-between p-4">
                <button className="bi bi-list text-[32px] cursor-pointer " onClick={() => setIsOpen(!isOpen)}></button>
                <Image src="/Logo.svg" width={50} height={50} alt="Logo" className="justify-self-center"></Image>
                <div className="w-[32px]"></div>
            </div>
            {isOpen && (
                <div className="flex fixed h-screen w-full flex-col bg-real-black text-lg font-semibold p-4">
                        <Link href={`/${lang}/`} className="my-4 border-b-2 border-b-luxury-gray w-30 text-[32px]">Home</Link>
                        <Link href={`/${lang}/project`} className="border-b-2 border-b-luxury-gray w-30 text-[32px]">Projects</Link>
                        <Link href={`/${lang}/contact`} className="my-4 text-[32px]">
                            <Button className="rounded-xl cursor-pointer bg-electric-blue text-white text-[16px] hover:bg-electric-blue/70 p-4 py-5">
                                Contact me
                            </Button>
                        </Link>
                </div>
            )}
            
        </div>
    );
}