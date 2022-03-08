import axios from 'axios';
import {BASE_URL} from '../../utils/utils';
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

export const getGenresList = () => async dispatch => {
  dispatch({
    type: GET_GENRES_LOADING,
    genresFetched: false,
  });
  try {
    console.log(`${BASE_URL}/genre/genres`);
    const {data} = await axios.get(`${BASE_URL}/genre/genres`, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json',
      },
    });
    if (data.status === 200) {
      console.log(data.data, 'genre');
      dispatch({
        type: GET_GENRES_SUCCESS,
        genresList: data.data,
        genresFetched: true,
      });
    }
    return data;
  } catch (error) {
    console.log(error, 'err-----------');
    dispatch({
      type: GET_GENRES_ERROR,
      genresFetched: false,
    });
    return {message: error};
  }
};

export const getArtistsList = () => async dispatch => {
  dispatch({
    type: GET_ARTISTS_LOADING,
    artistsFetched: false,
  });
  try {
    console.log(`${BASE_URL}/artist/artists`);
    const {data} = await axios.get(`${BASE_URL}/artist/artists`, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json',
      },
    });
    if (data.status === 200) {
      console.log(data.data, 'artist');
      dispatch({
        type: GET_ARTISTS_SUCCESS,
        artistsList: data.data,
        artistsFetched: true,
      });
    }
    return data;
  } catch (error) {
    console.log(error, 'err-----------');
    dispatch({
      type: GET_ARTISTS_ERROR,
      artistsFetched: false,
    });
    return {message: error};
  }
};

export const getLanguagesList = () => async dispatch => {
  dispatch({
    type: GET_LANGUAGES_LOADING,
    languagesFetched: false,
  });
  try {
    console.log(`${BASE_URL}/language/languages`);
    const {data} = await axios.get(`${BASE_URL}/language/languages`, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json',
      },
    });
    if (data.status === 200) {
      console.log(data.data, 'language');
      dispatch({
        type: GET_LANGUAGES_SUCCESS,
        languagesList: data.data,
        languagesFetched: true,
      });
    }
    return data;
  } catch (error) {
    console.log(error, 'err-----------');
    dispatch({
      type: GET_LANGUAGES_ERROR,
      languagesFetched: false,
    });
    return {message: error};
  }
};
