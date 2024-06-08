export interface Project {
  title: string;
  link: string;
  description: string;
}

export function getProjects(): Project[] {
  return [
    {
      title: 'NASA APODs Gallery',
      link: 'https://github.com/ausathdzil/nasa-apods-gallery',
      description:
        'My attempt at cloning NASA APOD.',
    },
    {
      title: 'Bookshelf',
      link: 'https://github.com/ausathdzil/nextjs-bookshelf',
      description:
        'A catalogue for managing books.',
    },
    {
      title: 'Portfolio',
      link: 'https://github.com/ausathdzil/astro-portfolio',
      description: 'My personal web portfolio.',
    },
    {
      title: 'React Calculator',
      link: 'https://github.com/ausathdzil/react-calculator',
      description: 'Calculator web app.',
    },
    {
      title: 'Social Linktree',
      link: 'https://github.com/ausathdzil/social-links',
      description:
        'A simple social linktree.',
    },
    {
      title: 'Discord Classroom Bot',
      link: 'https://github.com/ausathdzil/discord-blast-bot',
      description:
        'Discord bot for personal classroom use. Made with discord.js.',
    },
  ];
}
