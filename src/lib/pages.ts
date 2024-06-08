export interface Page {
  name: string;
  link: string;
  label: string;
}

export function getPageLinks(): Page[] {
  return [
    {
      name: 'music',
      link: '/music/',
      label: "Link to ausath's music playlist",
    },
  ];
}
