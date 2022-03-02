import axios from 'axios';
import {storageKey, storeData} from '../../constants/auth';
import {BASE_URL} from '../../utils/utils';
import {
  USER_SIGNIN_ERROR,
  USER_SIGNIN_LOADING,
  USER_SIGNIN_SUCCESS,
} from '../actions/authTypes';

export const loginApi = input => async dispatch => {
  dispatch({
    type: USER_SIGNIN_LOADING,
    isLoading: true,
  });
  try {
    console.log(`${BASE_URL}/user/login`);
    const {data} = await axios.post(`${BASE_URL}/user/login`, input, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (data.status === 200) {
      storeData(storageKey.AUTH_TOKEN, data.data.token);
      storeData(storageKey.USERDATA, JSON.stringify(data.data.user));
      //   console.log(data.data.user);
      //   console.log(data.data.user.token);
    }
    dispatch({type: USER_SIGNIN_SUCCESS, userData: data.data.user});
    return data;
  } catch (error) {
    console.log(error, 'err-----------');
    dispatch({
      type: USER_SIGNIN_ERROR,
      isLoading: false,
    });
    return {message: error};
  }
};
