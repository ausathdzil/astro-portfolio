export interface Project {
  title: string;
  link: string;
  webLink?: string;
  description: string;
}

export function getProjects(): Project[] {
  return [
    {
      title: 'NASA APODs Gallery',
      link: 'https://github.com/ausathdzil/nasa-apods-gallery',
      webLink: 'https://nasa-apods-gallery.vercel.app/',
      description: 'My attempt at cloning NASA APOD.',
    },
    {
      title: 'Hotel Express',
      link: 'https://github.com/ausathdzil/hotel-express',
      description: 'Full-stack web app for hotel management system simulation.',
    },
    {
      title: 'Portfolio',
      link: 'https://github.com/ausathdzil/astro-portfolio',
      webLink: 'https://ausathdzil.vercel.app/',
      description: 'My personal web portfolio.',
    },
    {
      title: 'React Calculator',
      link: 'https://github.com/ausathdzil/react-calculator',
      webLink: 'https://react-calculator-ausath.vercel.app/',
      description: 'Calculator web app.',
    },
    {
      title: 'Social Links Profile',
      link: 'https://github.com/ausathdzil/social-links',
      webLink: 'https://social-links-ausath.vercel.app/',
      description: 'A simple social links for your profile.',
    },
    {
      title: 'Discord Classroom Bot',
      link: 'https://github.com/ausathdzil/discord-blast-bot',
      description: 'Discord bot for personal classroom use.',
    },
  ];
}
