import axios from 'axios';
import {BASE_URL} from '../../utils/utils';
import {
  GET_GENRE_SONGS_SUCCESS,
  GET_GENRE_SONGS_ERROR,
  GET_GENRE_SONGS_LOADING,
  GET_ARTIST_SONGS_ERROR,
  GET_ARTIST_SONGS_LOADING,
  GET_ARTIST_SONGS_SUCCESS,
  GET_LANGUAGE_SONGS_ERROR,
  GET_LANGUAGE_SONGS_LOADING,
  GET_LANGUAGE_SONGS_SUCCESS,
} from '../actions/songsTypes';

export const getGenreSongs = id => async dispatch => {
  dispatch({
    type: GET_GENRE_SONGS_LOADING,
    genresongsFetched: false,
  });
  try {
    console.log(`${BASE_URL}/genre/songs`);
    const body = {
      _id: id,
    };
    const {data} = await axios.post(`${BASE_URL}/genre/songs`, body, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json',
      },
    });
    if (data.status === 200) {
      console.log(data.data, 'songs');
      dispatch({
        type: GET_GENRE_SONGS_SUCCESS,
        genresongsList: data.data,
        genresongsFetched: true,
      });
    }
    return data;
  } catch (error) {
    console.log(error, 'err-----------');
    dispatch({
      type: GET_GENRE_SONGS_ERROR,
      genresongsFetched: false,
    });
    return {message: error};
  }
};
export const getArtistSongs = id => async dispatch => {
  dispatch({
    type: GET_ARTIST_SONGS_LOADING,
    artistsongsFetched: false,
  });
  try {
    console.log(`${BASE_URL}/artist/allsongs`);
    const body = {
      _id: id,
    };
    const {data} = await axios.post(`${BASE_URL}/artist/allsongs`, body, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json',
      },
    });
    if (data.status === 200) {
      console.log(data.data, 'songs');
      dispatch({
        type: GET_ARTIST_SONGS_SUCCESS,
        artistsongsList: data.data,
        artistsongsFetched: true,
      });
    }
    return data;
  } catch (error) {
    console.log(error, 'err-----------');
    dispatch({
      type: GET_ARTIST_SONGS_ERROR,
      artistsongsFetched: false,
    });
    return {message: error};
  }
};
export const getLanguageSongs = id => async dispatch => {
  dispatch({
    type: GET_LANGUAGE_SONGS_LOADING,
    languagesongsFetched: false,
  });
  try {
    console.log(`${BASE_URL}/language/songs`);
    const body = {
      _id: id,
    };
    const {data} = await axios.post(`${BASE_URL}/language/songs`, body, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json',
      },
    });
    if (data.status === 200) {
      console.log(data.data, 'songs');
      dispatch({
        type: GET_LANGUAGE_SONGS_SUCCESS,
        languagesongsList: data.data,
        languagesongsFetched: true,
      });
    }
    return data;
  } catch (error) {
    console.log(error, 'err-----------');
    dispatch({
      type: GET_LANGUAGE_SONGS_ERROR,
      languagesongsFetched: false,
    });
    return {message: error};
  }
};
