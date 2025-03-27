
export default function Home() {
    const translations = require(`../locales/en.json`);

    return (
        <div>
            <h1>{translations.title}</h1>
        </div>)
}