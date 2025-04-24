import "server-only";

const dictionaries = {
    en: async () => (await import("@/dictionaries/en.json")).default,
    cs: async () => (await import("@/dictionaries/cs.json")).default,
};

export const getDictionary = async (locale: "cs" | "en") => 
    dictionaries[locale]()

