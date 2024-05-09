const artists = [
  {
    name: "Charlie Puth",
    image: "/charlie-puth.jpg",
    link: "https://open.spotify.com/artist/6VuMaDnrHyPL1p4EHjYLi7"
  },
];

export default function ArtistsCards() {
  return (
    <div className="mt-8 mb-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
      {artists.map((artist, index) => (
        <a 
          key={index} 
          href={artist.link} 
          target="_blank" 
          className="flex flex-col hover:text-emerald-500 justify-center items-center"
        >
          <img
            src={artist.image}
            alt={`${artist.name}'s profile picture`}
            loading="lazy"
            width="150px"
            className="rounded-full mb-4"
          />
          <h1 className="font-semibold text-lg">{artist.name}</h1>
        </a>
      ))}
    </div>
  );
}
