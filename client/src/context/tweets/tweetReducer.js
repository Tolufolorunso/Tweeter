import {
  GET_TWEETS_BEGIN,
  GET_TWEETS_SUCCESS,
  GET_TWEETS_ERROR,
  POST_TWEET_BEGIN,
  POST_TWEET_SUCCESS,
  POST_TWEET_ERROR,
  LIKE_SUCCESS,
  RETWEET_SUCCESS,
  SAVE_TWEET_SUCCESS,
  GET_BOOKMARKS_BEGIN,
  GET_BOOKMARKS_SUCCESS,
  GET_BOOKMARKS_ERROR,
} from "./action";

const reducer = (state, { type, payload }) => {
  if (GET_TWEETS_BEGIN === type) {
    return { ...state, isLoading: true };
  }

  if (GET_TWEETS_SUCCESS === type) {
    return { ...state, isLoading: false, tweets: payload };
  }

  if (GET_TWEETS_ERROR === type) {
    return { ...state, isLoading: false };
  }

  if (POST_TWEET_BEGIN === type) {
    return { ...state, isLoading: true };
  }

  if (POST_TWEET_SUCCESS === type) {
    console.log(payload, state.tweets);
    return { ...state, isLoading: false, tweets: [payload, ...state.tweets] };
  }

  if (POST_TWEET_ERROR === type) {
    return { ...state, isLoading: false };
  }

  if (LIKE_SUCCESS === type) {
    const index = state.tweets.findIndex((tweet) => tweet._id === payload._id);
    state.tweets.splice(index, 1, payload);
    return { ...state, isLoading: false };
  }

  if (RETWEET_SUCCESS === type) {
    const index = state.tweets.findIndex((tweet) => tweet._id === payload._id);
    state.tweets.splice(index, 1, payload);
    return { ...state, isLoading: false };
  }

  if (SAVE_TWEET_SUCCESS === type) {
    if(typeof payload === 'object') {
      return { ...state, isLoading: false, };
    }
    return { ...state, isLoading: false, message: payload };

  }

  if (GET_BOOKMARKS_BEGIN === type) {
    return { ...state, isLoading: true };
  }

  if (GET_BOOKMARKS_ERROR === type) {
    return { ...state, isLoading: false };
  }

  if (GET_BOOKMARKS_SUCCESS === type) {
    return { ...state, isLoading: false,tweets: payload };
  }
  throw new Error(`No such acyion :${type}`);
};

export default reducer;
