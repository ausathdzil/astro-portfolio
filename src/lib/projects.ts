export interface Project {
  title: string;
  link: string;
  description: string;
}

export function getProjects(): Project[] {
  return [
    {
      title: "React Calculator",
      link: "https://github.com/ausathdzil/react-calculator",
      description: "Calculator app made with React and Tailwind CSS.",
    },
    {
      title: "Social Linktree",
      link: "https://github.com/ausathdzil/social-links",
      description: "A simple social linktree made with React and Tailwind CSS.",
    },
    {
      title: "Discord Classroom Bot",
      link: "https://github.com/ausathdzil/discord-blast-bot",
      description:
        "Discord bot for personal classroom use. Made with Discord js.",
    },
    {
      title: "Bookshelf",
      link: "https://github.com/ausathdzil/bookshelf-app",
      description: "Bookshelf app made with vanilla JavaScript.",
    },
    {
      title: "Terminal Quiz",
      link: "https://github.com/ausathdzil/quiz-app",
      description: "A quiz game that runs on your terminal, made with C.",
    },
    {
      title: "Music Gallery",
      link: "https://github.com/ausathdzil/astro-portfolio",
      description: "My personal music gallery, it's on this website :)",
    },
  ];
}
