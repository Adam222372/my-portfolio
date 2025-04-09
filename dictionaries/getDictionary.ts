export async function getDictionary(lang: string) {
    try {
        const dictionary = await import(`./${lang}.json`);
        return dictionary.default; // Access the default export of the JSON file
    } catch (error) {
        console.error(`Error loading dictionary for language "${lang}":`, error);
        throw new Error(`Could not load dictionary for language: ${lang}`);
    }
}