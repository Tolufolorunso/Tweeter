import {
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './action';

const reducer = (state, action) => {
  if (REGISTER_BEGIN === action.type) {
    return { ...state, isLoading: true };
  }

  if (REGISTER_SUCCESS === action.type) {
    return { ...state, isLoading: false };
  }

  if (REGISTER_ERROR === action.type) {
    return { ...state, isLoading: false };
  }

  if (LOGIN_BEGIN === action.type) {
    return { ...state, isLoading: true };
  }

  if (LOGIN_SUCCESS === action.type) {
    return { ...state, isLoading: false };
  }

  if (LOGIN_ERROR === action.type) {
    return { ...state, isLoading: false };
  }

  throw new Error(`No such acyion :${action.type}`);
};

export default reducer;
