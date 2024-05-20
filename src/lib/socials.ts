import GitHubLogo from "@/components/icons/GitHubLogo.astro";
import InstagramLogo from "@/components/icons/InstagramLogo.astro";
import SpotifyLogo from "@/components/icons/SpotifyLogo.astro";
import DiscordLogo from "@/components/icons/DiscordLogo.astro";

export interface Social {
  href: string;
  label: string;
  Logo: any;
}

export function getSocials(): Social[] {
  return [
    {
      href: "https://github.com/ausathdzil",
      label: "Link to ausath's GitHub profile",
      Logo: GitHubLogo,
    },
    {
      href: "https://instagram.com/ausathdzil",
      label: "Link to ausath's Instagram profile",
      Logo: InstagramLogo,
    },
    {
      href: "https://open.spotify.com/user/ausaaath?si=v8FEhD6HSCm0wVZxkAWdew",
      label: "Link to ausath's Spotify profile",
      Logo: SpotifyLogo,
    },
    {
      href: "https://discord.com/users/ausathdzil",
      label: "Link to ausath's Discord profile",
      Logo: DiscordLogo,
    },
  ];
}
