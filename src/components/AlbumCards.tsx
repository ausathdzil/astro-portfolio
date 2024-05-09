export const albums = [
  {
    title: "Voicenotes",
    image: "/voicenotes.png",
    artist: "Charlie Puth",
    songs: [
      {
        title: "The Way I Am",
        link: "https://open.spotify.com/track/6qNALlmZa1ESnCxJmXE1K9?si=55d4140333ab40f1",
        duration: "3:06",
      },
      {
        title: "Attention",
        link: "https://open.spotify.com/track/5cF0dROlMOK5uNZtivgu50?si=1c75393193d548a7",
        duration: "3:28",
      },
      {
        title: "LA Girls",
        link: "https://open.spotify.com/track/6pQadiopoIsS4x78tjSkJt?si=0460ecd6bd794b9e",
        duration: "3:17",
      },
      {
        title: "How Long",
        link: "https://open.spotify.com/track/6wmAHw1szh5RCKSRjiXhPe?si=535640820a884fee",
        duration: "3:20",
      },
      {
        title: "Done for Me (feat. Kehlani)",
        link: "https://open.spotify.com/track/1lsBTdE6MGsKeZCD6llNu7?si=5c89a8fd5aac4936",
        duration: "3:00",
      },
      {
        title: "Patient",
        link: "https://open.spotify.com/track/2ZrHbO88rM6Ijeg0aJmSzl?si=22c544e9ed3f48b3",
        duration: "3:10",
      },
      {
        title: "If You Leave Me Now (feat. Boyz II Men",
        link: "https://open.spotify.com/track/5QLAHKawoQwVRNf1waaVW7?si=087e25601e3546d0",
        duration: "4:03",
      },
      {
        title: "BOY",
        link: "https://open.spotify.com/track/7aSvPfoqiM0zwPqupLGaHd?si=e0d714f299384df6",
        duration: "4:23",
      },
      {
        title: "Slow it Down",
        link: "https://open.spotify.com/track/6TapyDFlRUlZ4cmIaqJx4k?si=846f2ca558644bb0",
        duration: "3:10",
      },
      {
        title: "Change (feat. James Taylor)",
        link: "https://open.spotify.com/track/17RMnDmv5CEo3s0tmipRyb?si=218807b685824641",
        duration: "3:37",
      },
      {
        title: "Somebody Told Me",
        link: "https://open.spotify.com/track/1PuQTv1Kr1gzLgVeATSuh6?si=aed687c1115b46c9",
        duration: "3:36",
      },
      {
        title: "Empty Cups",
        link: "https://open.spotify.com/track/7k7JKDjCd9zuL0iF7iWaNs?si=fffb525e0c0e4b12",
        duration: "2:50",
      },
      {
        title: "Through It All",
        link: "https://open.spotify.com/track/4jgF1sLf3TkQbZkLHsc6SI?si=8879718e6a2c482b",
        duration: "3:26",
      },
    ],
  },
];

export default function AlbumCards() {
  return (
    <div className="mt-8 mb-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
      {albums.map((album, index) => (
        <a 
          href={`/album/${album.title}`}
          key={index} 
          className="flex flex-col justify-center items-center sm:items-start ">
          <div className="hover:text-rose-500 text-center sm:text-left">
            <img
              src={album.image}
              alt={`${album.title} album cover`}
              loading="lazy"
              className="rounded-lg mb-4"
              width="200px"
            />
            <h1 className="font-semibold text-lg">{album.title}</h1>
          </div>
          <p className="text-sm">{album.artist}</p>
        </a>
      ))}
    </div>
  );
}
