const albums = [
  {
    title: "Voicenotes",
    image: "/voicenotes.png",
    artist: "Charlie Puth",
  },
  {
    title: "Voicenotes",
    image: "/voicenotes.png",
    artist: "Charlie Puth",
  },
  {
    title: "Voicenotes",
    image: "/voicenotes.png",
    artist: "Charlie Puth",
  },

  {
    title: "Voicenotes",
    image: "/voicenotes.png",
    artist: "Charlie Puth",
  },
  {
    title: "Voicenotes",
    image: "/voicenotes.png",
    artist: "Charlie Puth",
  },
  {
    title: "Voicenotes",
    image: "/voicenotes.png",
    artist: "Charlie Puth",
  },

  {
    title: "Voicenotes",
    image: "/voicenotes.png",
    artist: "Charlie Puth",
  },
  {
    title: "Voicenotes",
    image: "/voicenotes.png",
    artist: "Charlie Puth",
  },
  {
    title: "Voicenotes",
    image: "/voicenotes.png",
    artist: "Charlie Puth",
  },
];

export default function AlbumCards() {
  return (
    <div className="mt-8 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
      {albums.map((album, index) => (
        <div key={index} className="flex flex-col justify-center items-center sm:items-start ">
          <div className="hover:text-rose-500 text-center sm:text-left">
            <img
              src={album.image}
              alt={album.title}
              className="rounded-lg mb-4"
            />
            <h1 className="font-semibold text-lg">{album.title}</h1>
          </div>
          <p className="text-sm">{album.artist}</p>
        </div>
      ))}
    </div>
  );
}