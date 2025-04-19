export async function getDictionary(lang: string) {
    const dictionary = await import(`./${lang}.json`);
    return dictionary.default;
}