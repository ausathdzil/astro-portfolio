import { ProgressBar } from './ProgressBar';
import { languages } from '@/lib/languages';

export default function LanguageProgress() {
  return (
    <div className="flex flex-col gap-4">
      {languages.map((language, index) => (
        <div key={index}>
          <p className="mb-4 text-base ">{language.name}</p>
          <ProgressBar languageProgress={language.progress} />
        </div>
      ))}
    </div>
  );
}
