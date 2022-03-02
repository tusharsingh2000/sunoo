import {
  USER_SIGNIN_LOADING,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
} from '../actions/authTypes';

const initialState = {
  isLoading: false,
  userData: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.userData,
        },
      };

    case USER_SIGNIN_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
