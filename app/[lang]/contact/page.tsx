import React from "react";
import { getDictionary } from "@/dictionaries/getDictionary";

// Define the languages you want to support
const supportedLanguages = ["en", "cs"]; // Add your supported languages here

// Generate static params for each language
export async function generateStaticParams() {
    return supportedLanguages.map((lang) => ({
        lang,
    }));
}

export default async function Contact({ params }: { params: { lang: string } }) {
    const { lang } = params;

    // Fetch the dictionary for the current language
    const dictionary = await getDictionary(lang);

    return (
        <div className="mt-[100px] flex flex-col justify-center items-center">
            <div className="flex justify-center flex-col items-center self-center">
                <form action="/contact" method="POST" className="flex flex-col my-8">
                    <div className="flex space-y-2 justify-between w-full">
                        <input
                            type="email"
                            name="email"
                            placeholder={dictionary.contact.email} // Dynamic placeholder
                            required
                            className="border-b-2 border-luxury-gray focus:border-white focus:outline-hidden my-8 w-55"
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder={dictionary.contact.subject} // Dynamic placeholder
                            required
                            className="border-b-2 border-luxury-gray focus:border-white focus:outline-hidden my-8 w-55"
                        />
                    </div>

                    <textarea
                        name="notes"
                        placeholder={dictionary.contact.message} // Dynamic placeholder
                        required
                        className="border-luxury-gray border-2 focus:border-white focus:outline-hidden rounded-xl min-w-125 max-w-lg h-70 min-h-75 resize placeholder:ml-2 p-[1rem]"
                    ></textarea>

                    <div className="flex justify-end items-center">
                        <button
                            type="submit"
                            className="bg-electric-blue text-white rounded-lg w-25 h-8 cursor-pointer m-4 hover:bg-electric-blue/70 transition font-medium"
                        >
                            {dictionary.contact.send}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}