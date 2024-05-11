export interface TechStack {
  name: string;
  image: string;
  link: string;
}

export function getTechStack(): TechStack[] {
  return [
    {
      name: "Astro",
      image: "/astro-icon.svg",
      link: "https://astro.build/",
    },
    {
      name: "React",
      image: "/react-icon.svg",
      link: "https://react.dev/",
    },
    {
      name: "Tailwind CSS",
      image: "/tailwind-icon.svg",
      link: "https://tailwindcss.com/",
    },
  ];
}
