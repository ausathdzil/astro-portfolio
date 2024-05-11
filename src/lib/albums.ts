interface Song {
  title: string;
  link: string;
  duration: string;
}

export interface Album {
  id: string;
  title: string;
  image: string;
  artist: string;
  songs: Song[];
}

export function getAlbums(): Album[] {
  return [
    {
      id: "1",
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
    {
      id: "2",
      title: "Superache",
      image: "/superache.png",
      artist: "Conan Gray",
      songs: [
        {
          title: "Movies",
          link: "https://open.spotify.com/track/6FH6fmlh9DbvssuEQyQEVd?si=2c4c65f331d44059",
          duration: "3:35",
        },
        {
          title: "People Watching",
          link: "https://open.spotify.com/track/3TFoEJe5zNuHZStRboWPxg?si=7f88a40526f848ef",
          duration: "2:38",
        },
        {
          title: "Disaster",
          link: "https://open.spotify.com/track/3SWGtKHaCFEUqfm9ydUFVw?si=bc30eb3bcff848d3",
          duration: "2:33",
        },
        {
          title: "Best Friend",
          link: "https://open.spotify.com/track/6VZXTCIXbgypt0erc2U1Uk?si=b3c176f55aa943cf",
          duration: "2:28",
        },
        {
          title: "Astronomy",
          link: "https://open.spotify.com/track/2JN3ugW1cEahbYw0I5mw5U?si=635d3de8afef492a",
          duration: "4:03",
        },
        {
          title: "Yours",
          link: "https://open.spotify.com/track/3rPVtXLBfJz59U1LgrGHhb?si=11a1067dfbb048d9",
          duration: "3:24",
        },
        {
          title: "Jigsaw",
          link: "https://open.spotify.com/track/6bOd4UM7FaQOZXR2MBzSPi?si=0696d331208d4d5c",
          duration: "3:28",
        },
        {
          title: "Family Line",
          link: "https://open.spotify.com/track/0iNZGC211wst3VjtobNnC5?si=10cd8d5876d34fb3",
          duration: "3:36",
        },
        {
          title: "Summer Child",
          link: "https://open.spotify.com/track/6vOcpn5zG3tAgSs5TCYR1o?si=2789fcfc98904ce5",
          duration: "2:59",
        },
        {
          title: "Footnote",
          link: "https://open.spotify.com/track/7jrYMBC1bS1SCwxE2bt3AP?si=8631bc67d95c45d5",
          duration: "3:44",
        },
        {
          title: "Memories",
          link: "https://open.spotify.com/track/5UXJzLFdBn6u9FJTCnoHrH?si=49f302f0faea4b46",
          duration: "4:08",
        },
        {
          title: "The Exit",
          link: "https://open.spotify.com/track/6PDWMQJ55ZYrGrSx3EZzl4?si=f74e5c72c4db440b",
          duration: "3:41",
        },
      ]
    }
  ];
} 
