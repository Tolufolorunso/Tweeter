import {
  GET_TWEETS_BEGIN,
  GET_TWEETS_SUCCESS,
  GET_TWEETS_ERROR,
  POST_TWEET_BEGIN,
  POST_TWEET_SUCCESS,
  POST_TWEET_ERROR,
  LIKE_SUCCESS,
  UNLIKE_SUCCESS,
} from './action';

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
    // console.log(payload);
    state.tweets.map((tweet) => {
      if (tweet._id === payload.tweetID) {
        return tweet.likes.push(payload.username);
      }
      return tweet;
    });

    return { ...state, isLoading: false };
  }

  if (UNLIKE_SUCCESS === type) {
    const newArr = state.tweets.map((tweet) => {
      if (tweet._id === payload.tweetID) {
        let i = tweet.likes.filter((like) => {
          return like !== payload.username;
        });
        tweet.likes = i;
        return tweet;
      }
      return tweet;
    });

    // console.log(newArr);

    return { ...state, isLoading: false, tweets: newArr };
  }

  throw new Error(`No such acyion :${type}`);
};

export default reducer;
