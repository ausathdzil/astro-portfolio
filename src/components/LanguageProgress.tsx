import { ProgressBar } from "./ProgressBar";

interface languagesType {
  name: string;
  progress: number;
}

const languages: languagesType[] = [
  {
    name: "JavaScript",
    progress: 60,
  },
  {
    name: "TypeScript",
    progress: 30,
  },
  {
    name: "C",
    progress: 10,
  },
];

export default function LanguageProgress() {
  return (
    <div className="flex flex-col gap-4 mb-8">
      {languages.map((language) => (
        <div>
          <p className="mb-4 text-base ">{language.name}</p>
          <ProgressBar languageProgress={language.progress} />
        </div>
      ))}
    </div>
  );
}
