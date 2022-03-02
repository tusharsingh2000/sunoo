export const artists = [
  {
    id: 0,
    name: 'Charlie Puth',
    image: '1G6bTvBYonv8dpqV32vTl82OfxKnE40pO',
    // 'http://docs.google.com/uc?export=open&id=1G6bTvBYonv8dpqV32vTl82OfxKnE40pO',
  },
  {
    id: 1,
    name: 'Halsey',
    image: 'zzVyNMxYGvUKsbNonzV6e73UtyDPzFZ',
  },
  {
    id: 2,
    name: 'Billie Elish',
    image: '19MyJGJav8Y5HqdZyYOJpOgPxR52HryGX',
  },
  {
    id: 3,
    name: 'Alec Benjamin',
    image: '1Vf609GqcYaTW57IIWARAIw2sX5G6zOCa',
  },
  {
    id: 4,
    name: 'Mohit Chauhan',
    image: '1IUOFyPpHrEY5zl5Ee_hPMSiH-JsUKkhY',
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
    // url: 'http://docs.google.com/uc?export=open&id=1mOBAY-YxjNjttjQwsFjebJOAix9QYMXP',
    url: '1V4Om-8fyDLe_BLHmn_WcpaBYYnF9JhCm',
    image: '1JE6I27dyE5T_1oXfYi1qhXcqnGpJSvP3',
  },
  {
    id: 1,
    songName: 'Let me down slowly',
    artist: 'Alec Benjamin',
    category: 'Romantic',
    language: 'English',
    album: 'single',
    url: '1_SQllviGxBRetOWKIiNJHu0Mmzj',
    image: '1tflHkKaRNAEDLlB_udhxl6zqCx-26nV0',
  },
  {
    id: 2,
    songName: 'Hymn for the weekend',
    artist: 'Jemma Johnson',
    category: 'Rock',
    language: 'English',
    album: 'single',
    url: '18oH__GggAjIuAfApEZwhyzMAVIdMPnmi',
    image: '1uNkxJImvlBHvgQtzKE438wpXsJ38re85',
  },
  {
    id: 3,
    songName: 'We dont talk anymore',
    artist: 'Charlie Puth',
    category: 'Rock',
    language: 'English',
    album: 'single',
    url: '1CBP6vPdHhsxvj6b569jgV4cfJyy0AXTL',
    image: '1r8q0ihJ5cmWsdm0w09R34OYVvJGtMlNP',
  },
  {
    id: 4,
    songName: 'Without me',
    artist: 'Halsey',
    category: 'Pop',
    language: 'English',
    album: 'single',
    url: '1IdozFA6USCOux9XZ97S0vCianM_eN3Ac',
    image: '1i2tlnJfTTNusSWG8j472iGUXiIDeXVyI',
  },
  {
    id: 5,
    songName: 'Lovely',
    artist: 'Billie Elish',
    category: 'Pop',
    language: 'English',
    album: 'single',
    url: '1Y6ZyH9XDdHkYT3Rso3oW7FdP6UfM0KTj',
    image: '1Yw65KXgX2QMjobDu7PS1tGrGnvzESDeL',
  },
  {
    id: 6,
    songName: 'Phir se udd chala',
    artist: 'Mohit Chauhan',
    category: 'Pop',
    language: 'Hindi',
    album: 'Rockstar',
    url: '12CE9oLHsfWumSNYAXKTqwljc7I4bDXvv',
    image: '15ZDoLSMr9om7dcWY6UgJ2-xX5lsnMrUQ',
  },
  {
    id: 7,
    songName: 'Tune jo na kaha',
    artist: 'Mohit Chauhan',
    category: 'Pop',
    language: 'Hindi',
    album: 'New York',
    url: '1YdhRVRSsWWcFyn-VrWbFkXPE_qT3leMi',
    image: '177rIwwGvDLe5llmGTA-uSYJQwnPFeyFO',
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
