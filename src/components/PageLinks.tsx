export default function PageLinks() {
  const pageLinks = [
    {
      name: "music",
      href: "/music/",
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
        <li className="flex mr-5">
          <a
            href={link.href}
            aria-label={link.label}
          >
            <p
              className="text-base text-zinc-500 border-b-0 bg-gradient-to-r from-emerald-500 
            to-sky-500 bg-[length:0_2px] bg-[0_100%] bg-no-repeat transition-all delay-75 ease-in-out 
            hover:bg-[length:100%_2px] hover:bg-[0_100%]"
            >
              {link.name}
            </p>
          </a>
        </li>
      ))}
    </>
  );
}
