import "server-only";

const dictionaries = {
    en:  () =>  import("@/dictionaries/en.json").then((module) => module.default),
    cs:  () =>  import("@/dictionaries/cs.json").then((module) => module.default),
};

export const getDictionary = async (locale: "cs" | "en") => 
    dictionaries[locale]()

