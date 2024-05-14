import AstroIcon from "@/components/icons/AstroIcon.astro";
import ReactIcon from "@/components/icons/ReactIcon.astro";
import TailwindIcon from "@/components/icons/TailwindIcon.astro";
export interface TechStack {
  name: string;
  link: string;
  Icon: any;
}

export function getTechStack(): TechStack[] {
  return [
    {
      name: "React",
      link: "https://react.dev/",
      Icon: ReactIcon,
    },
    {
      name: "Astro",
      link: "https://astro.build/",
      Icon: AstroIcon,
    },
    {
      name: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      Icon: TailwindIcon,
    },
  ];
}
