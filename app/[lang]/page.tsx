import { getDictionary } from './dictionaries';

export default async function Page({
                                       params,
                                   }: {
    params: { lang: 'en' | 'cs' };
}) {
    // Fetch the dictionary for the requested language
    const dict = await getDictionary(params.lang);

    return (
        <div>
            <h1>{dict.id}</h1> {/* Add to Cart */}
        </div>
    );
}
