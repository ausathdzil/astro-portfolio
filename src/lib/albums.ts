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
      ],
    },
    {
      id: "3",
      title: "THANK YOU BLUE",
      image: "/thank-you-blue.jpg",
      artist: "Daoko",
      songs: [
        {
          title: "打上花火",
          link: "https://open.spotify.com/track/4IouQaO9GkaHC7AtMErdSa?si=8cfa3e35427545ac",
          duration: "4:49",
        },
        {
          title: "ステップアップLOVE",
          link: "https://open.spotify.com/track/2qdkg8NGkGhukt8UQcVYci?si=e5544b3be6984973",
          duration: "4:16",
        },
        {
          title: "Juicy",
          link: "https://open.spotify.com/track/7k5UPBkjwMnaHOxPjbYswQ?si=99026052995a44f8",
          duration: "3:44",
        },
        {
          title: "さみしいかみさま",
          link: "https://open.spotify.com/track/1jsuNY2norISRscbYj5ISS?si=4a5e51aaf5ef4dd4",
          duration: "4:29",
        },
        {
          title: "ShibuyaK",
          link: "https://open.spotify.com/track/6hUO0kmNwu0ge6Bm8AXXc7?si=02e93b9c87184069",
          duration: "4:22",
        },
        {
          title: "BANG!",
          link: "https://open.spotify.com/track/5gOEWGhkbnYj3zuStB1N28?si=f345aafeef664ede",
          duration: "3:39",
        },
        {
          title: "ダイスキ with TeddyLoid",
          link: "https://open.spotify.com/track/6xN2yWQxi4fL7cVeo9281L?si=4b979ec22b304851",
          duration: "3:20",
        },
        {
          title: "拝啓グッバイさようなら",
          link: "https://open.spotify.com/track/7eIthkKvLLeGc9FfxRdOjt?si=0aac145b9acc449c",
          duration: "3:46",
        },
        {
          title: "同じ夜",
          link: "https://open.spotify.com/track/0lvirp6LgHwkRo7XvrNkxt?si=83e5965bdf534bc1",
          duration: "5:40",
        },
        {
          title: "GRY",
          link: "https://open.spotify.com/track/6V03d77GJp5QTC0rHTyTom?si=9d662ddb0da841be",
          duration: "2:57",
        },
        {
          title: "もしも僕らがGAMEの主役で",
          link: "https://open.spotify.com/track/6iKzGrRewL0aAjwzxdQFVp?si=122572867c6d40d7",
          duration: "3:49",
        },
        {
          title: "ゆめみてたのあたし",
          link: "https://open.spotify.com/track/58P3VN60GEMmzG3AlnxINg?si=6c2b6d8915c04bf5",
          duration: "4:31",
        },
        {
          title: "Cinderella step",
          link: "https://open.spotify.com/track/5n13HUQaAC0fo1Jb8mhQqq?si=2e8bf2e2d2c54eae",
          duration: "4:05",
        },
        {
          title: "ワンルーム・シーサイド・ステップ",
          link: "https://open.spotify.com/track/4e1VrjQPfuONA6FpyVEiW6?si=2c8fea284c7d4cb8",
          duration: "4:24",
        },
      ],
    },
    {
      id: "4",
      title: "Kid Krow",
      image: "/kid-krow.jpg",
      artist: "Conan Gray",
      songs: [

      ],
    },
    {
      id: "5",
      title: "Over the Rainbow",
      image: "/over-the-rainbow.png",
      artist: "SUKISHA • kiki vivi lily",
      songs: [

      ],
    },
    {
      id: "6",
      title: "Sketch",
      image: "/sketch.png",
      artist: "Lilas Ikuta",
      songs: [

      ],
    },
    {
      id: "7",
      title: "Tasty",
      image: "/tasty.jpg",
      artist: "kiki vivi livy",
      songs: [

      ],
    },
    {
      id: "8",
      title: "Shawn Mendes",
      image: "/shawn-mendes.png",
      artist: "Shawn Mendes",
      songs: [

      ],
    },
    {
      id: "9",
      title: "CHARLIE",
      image: "/charlie.jpg",
      artist: "Charlie Puth",
      songs: [

      ],
    },
  ];
}
