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
        {
          title: "Comfort Crowd",
          link: "https://open.spotify.com/track/6uaBrivDHCaV0uBTiwHTUi?si=ea3e2e687e124948",
          duration: "2:54",
        },
        {
          title: "Widh You Were Sober",
          link: "https://open.spotify.com/track/0kn2gu8Pd03DiYHzRvX2Xk?si=331512bcbeeb48a5",
          duration: "2:48",
        },
        {
          title: "Maniac",
          link: "https://open.spotify.com/track/6KfoDhO4XUWSbnyKjNp9c4?si=d65106c0d80f4419",
          duration: "3:05",
        },
        {
          title: "(Online Love)",
          link: "https://open.spotify.com/track/1WVunZLZM2zLTm5rAvKZkF?si=39eef2dc1a684107",
          duration: "0:37",
        },
        {
          title: "Checkmate",
          link: "https://open.spotify.com/track/3SnpCALgmzVy7k07aAXbuA?si=dfc73d077a674ade",
          duration: "2:28",
        },
        {
          title: "The Cut That Always Bleeds",
          link: "https://open.spotify.com/track/7wTqEW5nrMhvyEhEyTnOMd?si=523c9c08ff7a4b1c",
          duration: "3:51",
        },
        {
          title: "Fight or Flight",
          link: "https://open.spotify.com/track/0yfDVYKVKYrHknz9gVOlQr?si=4859e01bdf464e7f",
          duration: "2:51",
        },
        {
          title: "Affluenza",
          link: "https://open.spotify.com/track/0vq7fkHZl2khMonn5G7d9l?si=231be634d79f443f",
          duration: "3:19",
        },
        {
          title: "(Can We Be Friends?)",
          link: "https://open.spotify.com/track/05JtBVWRtSzqLoj7jj30kn?si=79017b0872384433",
          duration: "0:57",
        },
        {
          title: "Heather",
          link: "https://open.spotify.com/track/4xqrdfXkTW4T0RauPLv3WA?si=9fa8adc5d9244023",
          duration: "3:18",
        },
        {
          title: "Little League",
          link: "https://open.spotify.com/track/3XOHxCoPkXW0pvR6xl4f0M?si=c95dc90413374525",
          duration: "3:14",
        },
        {
          title: "The Story",
          link: "https://open.spotify.com/track/5GVPVxgdgTKJFxSxLVIw1A?si=118b5d6544f04b9b",
          duration: "4:05",
        },
      ],
    },
    {
      id: "5",
      title: "Over the Rainbow",
      image: "/over-the-rainbow.png",
      artist: "SUKISHA • kiki vivi lily",
      songs: [
        {
          title: "Departure",
          link: "https://open.spotify.com/track/16pa2RBOVK2cZj8oCmHtyI?si=ab43f48f61af4091",
          duration: "0:57",
        },
        {
          title: "Rainbow Town",
          link: "https://open.spotify.com/track/2znO8k9QLHyApE0vtagvcR?si=1e4bd817611b402d",
          duration: "3:58",
        },
        {
          title: "The Summer Storm Is Coming",
          link: "https://open.spotify.com/track/10IsO74xf5xG39vE5YUF5r?si=b7f85a7fb20e4665",
          duration: "1:06",
        },
        {
          title: "Blue in Green",
          link: "https://open.spotify.com/track/6EiGHN6OX3rPyPdqymU3V7?si=52859623d6144d96",
          duration: "4:41",
        },
        {
          title: "Falling Asleep",
          link: "https://open.spotify.com/track/1YLoma5YAWZcFt6JwIh3ru?si=7e3ee5c39c4d46f9",
          duration: "1:21",
        },
        {
          title: "Pink Jewelry Dream",
          link: "https://open.spotify.com/track/2RxZfHtvcfMrmrhWc8WQTn?si=3b8ec92eb2b84aa6",
          duration: "4:02",
        },
        {
          title: "Winter Stroll",
          link: "https://open.spotify.com/track/5dgbmWq5u4DvrFzsiVbVuX?si=87056ba6c2c54082",
          duration: "1:25",
        },
        {
          title: "Gray Spring",
          link: "https://open.spotify.com/track/4OiiPUJP083S23njuSJQca?si=498928a7c7704d63",
          duration: "3:12",
        },
        {
          title: "Destination",
          link: "https://open.spotify.com/track/4LfoBoFrWtKxmImrzOeXIQ?si=087f21b002a14154",
          duration: "0:59",
        },
        {
          title: "Rainbow Town - tofubeats remix",
          link: "https://open.spotify.com/track/5dvaFQC17VGFWZHlhbLHV9?si=cf1761307d634184",
          duration: "5:40",
        },
      ],
    },
    {
      id: "6",
      title: "Sketch",
      image: "/sketch.png",
      artist: "Lilas Ikuta",
      songs: [
        {
          title: "Answer",
          link: "https://open.spotify.com/track/0avegfB0TQ8cGDk9nuxcOQ?si=89e94e9df1244675",
          duration: "4:02",
        },
        {
          title: "サークル",
          link: "https://open.spotify.com/track/5sRnmEbAVSOcfqNlVwTfQe?si=0cc93e4815024141",
          duration: "3:15",
        },
        {
          title: "スパークル",
          link: "https://open.spotify.com/track/3MR8qQiK1Bydhw9WjAzwzU?si=fe98bbe82ac84a8d",
          duration: "3:30",
        },
        {
          title: "Midnight Talk",
          link: "https://open.spotify.com/track/7hcU6lOvSCniyGnSmTNjks?si=6c50e56965c14f27",
          duration: "3:39",
        },
        {
          title: "蒲公英",
          link: "https://open.spotify.com/track/7D4jDmHtDGiUSdf6BBb29C?si=4a8664aba7804d57",
          duration: "3:11",
        },
        {
          title: "JUMP",
          link: "https://open.spotify.com/track/6eBmuFpslaDqzWD8q14zPx?si=7266b3f8389e44ce",
          duration: "3:47",
        },
        {
          title: "レンズ",
          link: "https://open.spotify.com/track/6RiJ001BNFvjcOvt8r6VNG?si=cbc8eff956824ef9",
          duration: "3:53",
        },
        {
          title: "吉祥寺",
          link: "https://open.spotify.com/track/4tRQTvViZw91Xk2Z03jnYB?si=fb432c446780407d",
          duration: "2:49",
        },
        {
          title: "ヒカリ",
          link: "https://open.spotify.com/track/0yufeKCZsUBAoUAprazz9C?si=ebe1c315043b4424",
          duration: "4:04",
        },
        {
          title: "宝石",
          link: "https://open.spotify.com/track/4LbC3lgG4A54EiYxl3uDsl?si=0901173f6e9242a7",
          duration: "4:15",
        },
        {
          title: "ロマンスの約束",
          link: "https://open.spotify.com/track/1tevypbWcDiPoUSlxKkaUu?si=55f401a8c85b4e8a",
          duration: "3:42",
        },
      ],
    },
    {
      id: "7",
      title: "Tasty",
      image: "/tasty.jpg",
      artist: "kiki vivi livy",
      songs: [
        {
          title: "Intro : wip",
          link: "https://open.spotify.com/track/1u70zo2lQkGdITB0HVUvDi?si=22493f0935ec456d",
          duration: "0:42",
        },
        {
          title: "Lazy",
          link: "https://open.spotify.com/track/6pfnbN59U4lnlkMGphwaiU?si=b2613a86757240a5",
          duration: "3:53",
        },
        {
          title: "手を触れたら",
          link: "https://open.spotify.com/track/1OssVI7ZvMm76xzjMSini2?si=dd0927a2efda4140",
          duration: "3:39",
        },
        {
          title: "Yum Yum",
          link: "https://open.spotify.com/track/17xudZHGjUPBW3Bav357tq?si=b3c4ceed2d7042a5",
          duration: "3:37",
        },
        {
          title: "Whiskey",
          link: "https://open.spotify.com/track/7jC7Moj68Gby1jfMGmQNCh?si=92b21b1416f54fd3",
          duration: "4:11",
        },
        {
          title: "Interlude : Tasty",
          link: "https://open.spotify.com/track/1GNTai12qiuMLPceRTZXp1?si=1ca5e668d6704a39",
          duration: "1:01",
        },
        {
          title: "You Were Mine",
          link: "https://open.spotify.com/track/1euxfjrD0QvW6OI5UjFTH3?si=3c40e4e3ecfb4ae2",
          duration: "2:56",
        },
        {
          title: "New Day",
          link: "https://open.spotify.com/track/0bisB6eJdWyZuXauXgzMnF?si=bc4fac44fc8c404a",
          duration: "4:15",
        },
        {
          title: "Onion Soup",
          link: "https://open.spotify.com/track/2rChMfRrGeMMChLYpqKIkO?si=904ccdcde29d4f7f",
          duration: "4:09",
        },
      ],
    },
    {
      id: "8",
      title: "Shawn Mendes",
      image: "/shawn-mendes.png",
      artist: "Shawn Mendes",
      songs: [
        {
          title: "In My Blood",
          link: "https://open.spotify.com/track/2QZ7WLBE8h2y1Y5Fb8RYbH?si=74526d7146254ec6",
          duration: "3:31",
        },
        {
          title: "Fallin' All In You",
          link: "https://open.spotify.com/track/5EYBryPOgIEPB7r5QIy6eG?si=b694d6dbc459476b",
          duration: "3:55",
        },
        {
          title: "Where Were You In The Moring?",
          link: "https://open.spotify.com/track/376Gg7Oxo5C5jUWDWpVXeI?si=afd7b0acb3ff4edf",
          duration: "3:20",
        },
        {
          title: "Nervous",
          link: "https://open.spotify.com/track/5wxurz8J6YlyQRNnGN8zXS?si=06d64e75dce14084",
          duration: "2:44",
        },
        {
          title: "Like To Be You (feat. Julia Michaels)",
          link: "https://open.spotify.com/track/2IssBpPtHcViZL5vYQNHhA?si=5446ae58b9874355",
          duration: "2:39",
        },
        {
          title: "Lost In Japan",
          link: "https://open.spotify.com/track/79esEXlqqmq0GPz0xQSZTV?si=3f6c370ae90a4b18",
          duration: "3:21",
        },
        {
          title: "Particular Taste",
          link: "https://open.spotify.com/track/4BH9zDv1Ys6kw0j3lU1hTx?si=6fb1d1696efa437c",
          duration: "2:55",
        },
        {
          title: "Because I Had You",
          link: "https://open.spotify.com/track/1RRZSm4akqNyMOsPUhw4cb?si=4795e1a92c104c8e",
          duration: "2:22",
        },
        {
          title: "Why",
          link: "https://open.spotify.com/track/3XeqINnregzwBJNg7RyyH4?si=eb87a5910f0348ed",
          duration: "3:58",
        },
        {
          title: "Youth (feat. Khalid)",
          link: "https://open.spotify.com/track/1h0yImRPIVAjhhHeNVlTuC?si=beb09154ea534863",
          duration: "3:10",
        },
        {
          title: "Queen",
          link: "https://open.spotify.com/track/6D8FZWtCQRtQUVT3mpjrZs?si=ff79c4eb48e84268",
          duration: "3:24",
        },
        {
          title: "Perfectly Wrong",
          link: "https://open.spotify.com/track/6nat4Z7iRKWVk1qngQqI0Q?si=566e61bb23d44306",
          duration: "3:32",
        },
        {
          title: "Mutual",
          link: "https://open.spotify.com/track/5gW3kI83886nVV9apaFLWu?si=2c537e4f88e44547",
          duration: "2:28",
        },
        {
          title: "When You're Ready",
          link: "https://open.spotify.com/track/6bNcbh4SxQDU0BHa4Dj3wx?si=eab4685d69734820",
          duration: "2:49",
        },
      ],
    },
    {
      id: "9",
      title: "CHARLIE",
      image: "/charlie.jpg",
      artist: "Charlie Puth",
      songs: [
        {
          title: "That's Hilarious",
          link: "https://open.spotify.com/track/0wPKDeY4fZXT6k9bzV0kx0?si=3dab3cb72ce04f4a",
          duration: "2:24",
        },
        {
          title: "Charlie Be Quiet!",
          link: "https://open.spotify.com/track/3E9es0SK2EusrHA7IaO7Zu?si=0a3b7c7651204765",
          duration: "2:08",
        },
        {
          title: "Light Switch",
          link: "https://open.spotify.com/track/5Q4lCfjJ1aht8YZOGFbC5U?si=c82a08c5375243d4",
          duration: "3:07",
        },
        {
          title: "There's A First Time For Everything",
          link: "https://open.spotify.com/track/0I3FXz5RssOlMNI0FmPAkc?si=b2c97af852bb4c94",
          duration: "2:16",
        },
        {
          title: "Smells Like Me",
          link: "https://open.spotify.com/track/0OM84HfW4XX1kmwCMDPmcS?si=0c8b23a1ba9d4382",
          duration: "3:24",
        },
        {
          title: "Left and Right (Feat. Jung Kook of BTS)",
          link: "https://open.spotify.com/track/1tGq9MNEmWGevwtiBCdrbk?si=b6fa64a8234b4094",
          duration: "2:34",
        },
        {
          title: "Loser",
          link: "https://open.spotify.com/track/4oTn7ylKtjeMYwxatEVFAt?si=07815d93a5da4275",
          duration: "3:24",
        },
        {
          title: "When You're Sad I'm Sad",
          link: "https://open.spotify.com/track/4JC4Gj3DcAkwh9rvBeYoXy?si=3342ed4203744f55",
          duration: "2:54",
        },
        {
          title: "Marks On My Neck",
          link: "https://open.spotify.com/track/55ruPNJ55uKjtm77nf3lPD?si=90a69589e52742a7",
          duration: "2:18",
        },
        {
          title: "Tears On My Piano",
          link: "https://open.spotify.com/track/7mWBvNosCez1ry9f1ba197?si=8133098326f94b58",
          duration: "3:01",
        },
        {
          title: "I Don't Think That I Like Her",
          link: "https://open.spotify.com/track/0Ts1lnK3lYa2dwE2orDJc5?si=e5586fa33d1140d1",
          duration: "3:08",
        },
        {
          title: "No More Drama",
          link: "https://open.spotify.com/track/2g3afkZqrBxT9RWNSPSWa7?si=3dee52b55af14af1",
          duration: "2:20",
        },
      ],
    },
  ];
}
