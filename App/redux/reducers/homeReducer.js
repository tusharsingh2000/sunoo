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
} from '../actions/homeTypes';

const initialState = {
  genresFetched: false,
  genres: [1, 2, 3, 4],

  artistsFetched: false,
  artists: [1, 2, 3, 4],

  languagesFetched: false,
  languages: [1, 2, 3, 4],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRES_LOADING:
      return {
        ...state,
        genresFetched: action.genresFetched,
      };

    case GET_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.genresList,
        genresFetched: action.genresFetched,
      };

    case GET_GENRES_ERROR:
      return {
        ...state,
        genresFetched: action.genresFetched,
      };

    case GET_ARTISTS_LOADING:
      return {
        ...state,
        artistsFetched: action.artistsFetched,
      };

    case GET_ARTISTS_SUCCESS:
      return {
        ...state,
        artists: action.artistsList,
        artistsFetched: action.artistsFetched,
      };

    case GET_ARTISTS_ERROR:
      return {
        ...state,
        artistsFetched: action.artistsFetched,
      };

    case GET_LANGUAGES_LOADING:
      return {
        ...state,
        languagesFetched: action.languagesFetched,
      };

    case GET_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: action.languagesList,
        languagesFetched: action.languagesFetched,
      };

    case GET_LANGUAGES_ERROR:
      return {
        ...state,
        languagesFetched: action.languagesFetched,
      };

    default:
      return state;
  }
};
