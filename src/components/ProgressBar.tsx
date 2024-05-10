import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export function ProgressBar({ languageProgress }: {languageProgress: number}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(languageProgress), 250);
    return () => clearTimeout(timer);
  }, [languageProgress]);

  return (
    <Progress value={progress} className="w-full" role="progressbar" aria-label="language progress" />
  );
}
