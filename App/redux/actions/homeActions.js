import {
  GET_GENRES_LOADING,
  GET_GENRES_SUCCESS,
  GET_GENRES_ERROR,
  GET_ARTISTS_LOADING,
  GET_ARTISTS_SUCCESS,
  GET_ARTISTS_ERROR,
  GET_LANGUAGES_LOADING,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_ERROR,
} from './homeTypes';

export const getGenresLoading = genresFetched => ({
  type: GET_GENRES_LOADING,
  genresFetched: genresFetched,
});

export const updateGenresList = genresList => ({
  type: GET_GENRES_SUCCESS,
  genresList: genresList,
});

export const getGenresError = genresFetched => ({
  type: GET_GENRES_ERROR,
  genresFetched: genresFetched,
});

export const getArtistsLoading = artistsFetched => ({
  type: GET_ARTISTS_LOADING,
  artistsFetched: artistsFetched,
});

export const updateArtistsList = artistsList => ({
  type: GET_ARTISTS_SUCCESS,
  artistsList: artistsList,
});

export const getArtistsError = artistsFetched => ({
  type: GET_ARTISTS_ERROR,
  artistsFetched: artistsFetched,
});

export const getLanguagesLoading = languagesFetched => ({
  type: GET_LANGUAGES_LOADING,
  languagesFetched: languagesFetched,
});

export const updateLanguagesList = languagesList => ({
  type: GET_LANGUAGES_SUCCESS,
  languagesList: languagesList,
});

export const getLanguagesError = languagesFetched => ({
  type: GET_LANGUAGES_ERROR,
  languagesFetched: languagesFetched,
});
