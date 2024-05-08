export default function Links() {
  const pageLinks = [
    {
      name: "music",
      href: "https://open.spotify.com/playlist/3efExZxOEwFHj4MBgHYuXk?si=f4c6749503bc4459",
      label: "Link to ausath's music playlist",
    },
    {
      name: "blog",
      href: "/blog/",
      label: "Link to ausath's blog",
    },
  ];

  return (
    <>
      {pageLinks.map((link) => (
        <a
          href={link.href}
          aria-label={link.label}
          className="mr-5"
        >
          <p
            className="text-base text-zinc-500 border-b-0 bg-gradient-to-r from-emerald-500 
            to-sky-500 bg-[length:0_2px] bg-[0_100%] bg-no-repeat transition-all delay-75 ease-in-out 
            hover:bg-[length:100%_2px] hover:bg-[0_100%]"
          >
            {link.name}
          </p>
        </a>
      ))}
    </>
  );
}
