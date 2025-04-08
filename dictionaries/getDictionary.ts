export async function getDictionary(lang: string) {
    try {
        const dictionary = await import(`./dictionaries/${lang}.json`);
        return dictionary;
    } catch (error) {
        console.error("Error loading dictionary:", error);
        throw error;
    }
}