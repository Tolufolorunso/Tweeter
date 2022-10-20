import {
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  CLEAR_ERROR,
  FOLLOW_SUCCESS,
  UNFOLLOW_SUCCESS,
  UPDATEPROFILE_BEGIN,
  UPDATEPROFILE_ERROR,
  UPDATEPROFILE_SUCCESS,
} from './action';

const reducer = (state, { type, payload }) => {
  if (REGISTER_BEGIN === type) {
    return { ...state, isLoading: true };
  }

  if (REGISTER_SUCCESS === type) {
    return {
      ...state,
      isLoading: false,
      user: payload.user,
      token: payload.token,
    };
  }

  if (REGISTER_ERROR === type) {
    return {
      ...state,
      isLoading: false,
      error: payload,
    };
  }

  if (LOGIN_BEGIN === type) {
    return { ...state, isLoading: true };
  }

  if (LOGIN_SUCCESS === type) {
    return {
      ...state,
      isLoading: false,
      user: payload.user,
      token: payload.token,
      following: payload.user.following,
      followers: payload.user.followers,
    };
  }

  if (LOGIN_ERROR === type) {
    return { ...state, isLoading: false, error: payload };
  }

  if (UPDATEPROFILE_BEGIN === type) {
    return { ...state, isLoading: true };
  }

  if (UPDATEPROFILE_SUCCESS === type) {
    return {
      ...state,
      isLoading: false,
      user: payload,
    };
  }

  if (UPDATEPROFILE_ERROR === type) {
    return { ...state, isLoading: false };
  }

  if (LOGOUT === type) {
    return { ...state, isLoading: false, error: '', user: null, token: null };
  }

  if (FOLLOW_SUCCESS === type) {
    return { ...state, following: payload };
  }

  if (UNFOLLOW_SUCCESS === type) {
    localStorage.setItem('following', JSON.stringify(payload));
    return { ...state, following: payload };
  }

  if (CLEAR_ERROR === type) {
    return { ...state, isLoading: false, error: '' };
  }

  throw new Error(`No such action :${type}`);
};

export default reducer;
