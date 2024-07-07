export type Song = {
  title: string;
  link: string;
  duration: string;
};

export type Album = {
  id: string;
  title: string;
  image: string;
  artist: string;
  songs: Song[];
}

export type Language = {
  name: string;
  progress: number;
};

export type Project = {
  title: string;
  link: string;
  webLink?: string;
  description: string;
};

export type Social = {
  href: string;
  label: string;
  Logo: any;
};

export type Tool = {
  name: string;
  link: string;
  Logo: any;
};
