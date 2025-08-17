import "./globals.css";
import NavDesktop from "@/components/menu/NavDesktop";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getDictionary } from "./dictionaries";
import "bootstrap-icons/font/bootstrap-icons.css"
import NavMobile from "@/components/menu/NavMobile";


const dynamic = "force-dynamic"

const inter = Inter({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params,
}: {
  params: Promise<{ lang: "cs" | "en" }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <nav style={{ borderBottomColor: "var(--color-gray)" }} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[10px] bg-real-black/70 border-b-luxury-gray border-b-2">
          {/*Desktop nav*/}
          <div className="hidden md:block">
            <NavDesktop dictionary={dictionary} lang={lang} />
          </div>
          {/*Mobile nav*/}
          <div className="block md:hidden">
            <NavMobile dictionary={dictionary} lang={lang} />
          </div>
        </nav>
        {children}
        <div className="flex flex-col items-center p-2">
          <div className="mt-4 flex flex-col items-center">
            <h3 className="font-bold">Adam Holeček</h3>
            <div className="flex flex-col items-center">
              <Link href={"mailto:adamholecek22@gmail.com"} className="p-1">adamholecek22@gmail.com</Link>
              <Link href={"tel:+420603488922"} className="p-1">+420603488922</Link>
            </div>
          </div>
          <div className="flex space-x-2 p-4">
            <Link href={"https://github.com/Adam222372"}><i className="bi bi-github text-white text-2xl"></i></Link>
            <Link href="https://www.linkedin.com/in/adam-holeček-28b606312/"><i className="bi bi-linkedin text-white text-2xl"></i></Link>
          </div>
        </div>
      </body>
    </html>
  );
}
