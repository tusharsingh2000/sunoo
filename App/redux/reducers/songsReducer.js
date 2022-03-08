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
} from '../actions/songsTypes';

const initialState = {
  genresongsFetched: false,
  genresongs: [],

  artistsongsFetched: false,
  artistsongs: [],

  languagesongsFetched: false,
  languagesongs: [],
};

export const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRE_SONGS_LOADING:
      return {
        ...state,
        genresongsFetched: action.genresongsFetched,
      };

    case GET_GENRE_SONGS_SUCCESS:
      return {
        ...state,
        genresongs: action.genresongsList,
        genresongsFetched: action.genresongsFetched,
      };

    case GET_GENRE_SONGS_ERROR:
      return {
        ...state,
        genresongsFetched: action.genresongsFetched,
      };

    case GET_ARTIST_SONGS_LOADING:
      return {
        ...state,
        artistsongsFetched: action.artistsongsFetched,
      };

    case GET_ARTIST_SONGS_SUCCESS:
      return {
        ...state,
        artistsongs: action.artistsongsList,
        artistsongsFetched: action.artistsongsFetched,
      };

    case GET_ARTIST_SONGS_ERROR:
      return {
        ...state,
        artistsongsFetched: action.artistsongsFetched,
      };

    case GET_LANGUAGE_SONGS_LOADING:
      return {
        ...state,
        languagesongsFetched: action.languagesongsFetched,
      };

    case GET_LANGUAGE_SONGS_SUCCESS:
      return {
        ...state,
        languagesongs: action.languagesongsList,
        languagesongsFetched: action.languagesongsFetched,
      };

    case GET_LANGUAGE_SONGS_ERROR:
      return {
        ...state,
        languagesongsFetched: action.languagesongsFetched,
      };

    default:
      return state;
  }
};
