import GitHubIcon from "@/components/icons/GitHubIcon.astro";
import InstagramIcon from "@/components/icons/InstagramIcon.astro";
import SpotifyIcon from "@/components/icons/SpotifyIcon.astro";
import DiscordIcon from "@/components/icons/DiscordIcon.astro";

export interface Social {
  href: string;
  label: string;
  Icon: any;
}

export function getSocials(): Social[] {
  return [
    {
      href: "https://github.com/ausathdzil",
      label: "Link to ausath's GitHub profile",
      Icon: GitHubIcon,
    },
    {
      href: "https://instagram.com/ausathdzil",
      label: "Link to ausath's Instagram profile",
      Icon: InstagramIcon,
    },
    {
      href: "https://open.spotify.com/user/ausaaath?si=v8FEhD6HSCm0wVZxkAWdew",
      label: "Link to ausath's Spotify profile",
      Icon: SpotifyIcon,
    },
    {
      href: "https://discord.com/users/ausathdzil",
      label: "Link to ausath's Discord profile",
      Icon: DiscordIcon,
    },
  ];
}
