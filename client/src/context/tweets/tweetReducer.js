import {
  GET_TWEETS_BEGIN,
  GET_TWEETS_SUCCESS,
  GET_TWEETS_ERROR,
} from './action';

const reducer = (state, action) => {
  if (GET_TWEETS_BEGIN === action.type) {
    return { ...state, isLoading: true };
  }

  if (GET_TWEETS_SUCCESS === action.type) {
    return { ...state, isLoading: false };
  }

  if (GET_TWEETS_ERROR === action.type) {
    return { ...state, isLoading: false };
  }

  throw new Error(`No such acyion :${action.type}`);
};

export default reducer;
