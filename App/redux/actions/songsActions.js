import {
  GET_GENRE_SONGS_LOADING,
  GET_GENRE_SONGS_SUCCESS,
  GET_GENRE_SONGS_ERROR,
  GET_ARTIST_SONGS_LOADING,
  GET_ARTIST_SONGS_SUCCESS,
  GET_ARTIST_SONGS_ERROR,
  GET_LANGUAGE_SONGS_LOADING,
  GET_LANGUAGE_SONGS_SUCCESS,
  GET_LANGUAGE_SONGS_ERROR,
} from './songsTypes';

export const getGenreSongsLoading = genreSongsFetched => ({
  type: GET_GENRE_SONGS_LOADING,
  genreSongsFetched: genreSongsFetched,
});

export const updateGenreSongsList = genreSongsList => ({
  type: GET_GENRE_SONGS_SUCCESS,
  genreSongsList: genreSongsList,
});

export const getGenreError = genreSongsFetched => ({
  type: GET_GENRE_SONGS_ERROR,
  genreSongsFetched: genreSongsFetched,
});

export const getArtistSongsLoading = artistSongsFetched => ({
  type: GET_ARTIST_SONGS_LOADING,
  artistSongsFetched: artistSongsFetched,
});

export const updateArtistSongsList = artistSongsList => ({
  type: GET_ARTIST_SONGS_SUCCESS,
  artistSongsList: artistSongsList,
});

export const getArtistsError = artistSongsFetched => ({
  type: GET_ARTIST_SONGS_ERROR,
  artistSongsFetched: artistSongsFetched,
});

export const getLanguageSongsLoading = languageSongsFetched => ({
  type: GET_LANGUAGE_SONGS_LOADING,
  languageSongsFetched: languageSongsFetched,
});

export const updateLanguageSongsList = languageSongsList => ({
  type: GET_LANGUAGE_SONGS_SUCCESS,
  languageSongsList: languageSongsList,
});

export const getLanguagesError = languageSongsFetched => ({
  type: GET_LANGUAGE_SONGS_ERROR,
  languageSongsFetched: languageSongsFetched,
});
