import {
  USER_SIGNIN_LOADING,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
} from './authTypes';

export const userSignInLoading = isLoading => ({
  type: USER_SIGNIN_LOADING,
  isLoading: isLoading,
});

export const updateUser = userData => ({
  type: USER_SIGNIN_SUCCESS,
  userData: userData,
});

export const userSigninError = isLoading => ({
  type: USER_SIGNIN_ERROR,
  isLoading: isLoading,
});
