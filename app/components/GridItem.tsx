import { getDictionary } from "../dictionaries";

interface LocalizedContentProps {
  lang: "en" | "cs";
}

export default async function GridItem({ lang }: LocalizedContentProps) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      {Object.entries(dictionary).map(([key, value]: [string, any]) => (
        <div key={key} className="mb-6">
          <h2 className="text-xl font-bold">{value.title}</h2>
          <p className="text-gray-600">{value.description}</p>
          {value.text && <p className="mt-2">{value.text}</p>}
          {value.photoUrl && (
            <img
              src={value.photoUrl}
              alt={value.title}
              className="mt-4 rounded shadow"
            />
          )}
        </div>
      ))}
    </div>
  );
}