import { ProgressBar } from "./ProgressBar";

const languages = [
  {
    name: "JavaScript",
    progress: 85,
  },
  {
    name: "TypeScript",
    progress: 10,
  },
  {
    name: "C",
    progress: 5,
  },
];

export default function Language() {
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
