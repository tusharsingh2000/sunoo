export const artists = [
  {
    id: 0,
    name: 'Charlie Puth',
    image: require('./assets/images/artistImage/charlieputh.jpeg'),
  },
  {
    id: 1,
    name: 'Halsey',
    image: require('./assets/images/artistImage/halsey.jpeg'),
  },
  {
    id: 2,
    name: 'Billie Elish',
    image: require('./assets/images/artistImage/billie.jpeg'),
  },
  {
    id: 3,
    name: 'Alec Benjamin',
    image: require('./assets/images/artistImage/alec.jpeg'),
  },
  {
    id: 4,
    name: 'Mohit Chauhan',
    image: require('./assets/images/artistImage/mohit.jpeg'),
  },
];

export const genre = [
  {
    id: 0,
    name: 'Pop',
    image: require('./assets/images/genre/pop.jpeg'),
  },
  {
    id: 1,
    name: 'Rock',
    image: require('./assets/images/genre/rock.jpeg'),
  },
  {
    id: 2,
    name: 'Romantic',
    image: require('./assets/images/genre/romantic.jpeg'),
  },
  {
    id: 3,
    name: 'Sad',
    image: require('./assets/images/genre/sad.jpeg'),
  },
];

export const languages = [
  {
    id: 0,
    name: 'English',
    color: '#EC255A',
  },
  {
    id: 1,
    name: 'Hindi',
    color: '#AA14F0',
  },
  {
    id: 2,
    name: 'Punjabi',
    color: '#2EB086',
  },
];

export const songs = [
  {
    id: 0,
    songName: 'Attention',
    artist: 'Charlie Puth',
    category: 'Pop',
    language: 'English',
    album: 'single',
    url: require('./assets/englishsongs/attention.mp3'),
    image: require('./assets/images/songImage/attention.jpeg'),
  },
  {
    id: 1,
    songName: 'Let me down slowly',
    artist: 'Alec Benjamin',
    category: 'Romantic',
    language: 'English',
    album: 'single',
    url: require('./assets/englishsongs/let_me_down_slowly.mp3'),
    image: require('./assets/images/songImage/letmedownslowly.jpeg'),
  },
  {
    id: 2,
    songName: 'Hymn for the weekend',
    artist: 'Jemma Johnson',
    category: 'Rock',
    language: 'English',
    album: 'single',
    url: require('./assets/englishsongs/hymn_for_the_weekend.mp3'),
    image: require('./assets/images/songImage/hymnfortheweekend.jpeg'),
  },
  {
    id: 3,
    songName: 'We dont talk anymore',
    artist: 'Charlie Puth',
    category: 'Rock',
    language: 'English',
    album: 'single',
    url: require('./assets/englishsongs/we_dont_talk_anymore.mp3'),
    image: require('./assets/images/songImage/wedonttalkanymore.jpeg'),
  },
  {
    id: 4,
    songName: 'Without me',
    artist: 'Halsey',
    category: 'Pop',
    language: 'English',
    album: 'single',
    url: require('./assets/englishsongs/without_me.mp3'),
    image: require('./assets/images/songImage/withoutme.jpeg'),
  },
  {
    id: 5,
    songName: 'Lovely',
    artist: 'Billie Elish',
    category: 'Pop',
    language: 'English',
    album: 'single',
    url: require('./assets/englishsongs/lovely.mp3'),
    image: require('./assets/images/songImage/lovely.jpeg'),
  },
  {
    id: 6,
    songName: 'Phir se udd chala',
    artist: 'Mohit Chauhan',
    category: 'Pop',
    language: 'Hindi',
    album: 'Rockstar',
    url: require('./assets/hindisongs/phir_se_udd_chala.mp3'),
    image: require('./assets/images/songImage/phirseuddchala.jpeg'),
  },
  {
    id: 7,
    songName: 'Tune jo na kaha',
    artist: 'Mohit Chauhan',
    category: 'Pop',
    language: 'Hindi',
    album: 'New York',
    url: require('./assets/hindisongs/tune_jo_na_kaha.mp3'),
    image: require('./assets/images/songImage/tunejonakaha.jpeg'),
  },
];

export const libraryItems = [
  {
    name: 'Your Favorites',
    icon: 'heart-outline',
    route: 'FavoriteScreen',
  },
  {
    name: 'Recently Played',
    icon: 'time-outline',
    route: 'RecentlyPlayedScreen',
  },
];
