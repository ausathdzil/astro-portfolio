export interface Language {
  name: string;
  progress: number;
}

export function getLanguages(): Language[] {
  return [
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
}
