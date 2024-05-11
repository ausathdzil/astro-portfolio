export interface Project {
  title: string;
  link: string;
  description: string;
}

export function getProjects(): Project[] {
  return [
    {
      title: "Bookshelf",
      link: "https://github.com/ausathdzil/bookshelf-app",
      description: "Bookshelf app made with vanilla JavaScript.",
    },
    {
      title: "Social Linktree",
      link: "https://github.com/ausathdzil/social-links",
      description: "A simple social linktree made with React and Tailwind CSS.",
    },
    {
      title: "Terminal Quiz",
      link: "https://github.com/ausathdzil/quiz-app",
      description: "A Quiz game that runs on your terminal, made with C.",
    },
  ];
}
