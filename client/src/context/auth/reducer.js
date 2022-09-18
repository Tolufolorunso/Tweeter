import { REGISTER_BEGIN, REGISTER_SUCCESS, REGISTER_ERROR } from './action';

const reducer = (state, action) => {
  if (REGISTER_BEGIN === action.type) {
    return { ...state, isLoading: true };
  }

  if (REGISTER_SUCCESS === action.type) {
    return { ...state, isLoading: true };
  }

  if (REGISTER_ERROR === action.type) {
    return { ...state, isLoading: true };
  }

  throw new Error(`No such acyion :${action.type}`);
};

export default reducer;
