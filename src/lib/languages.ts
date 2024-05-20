export interface Language {
  name: string;
  progress: number;
}

export function getLanguages(): Language[] {
  return [
    {
      name: "TypeScript",
      progress: 60,
    },
    {
      name: "JavaScript",
      progress: 30,
    },
    {
      name: "C",
      progress: 10,
    },
  ];
}
