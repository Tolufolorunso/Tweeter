import React, { useReducer, useContext } from 'react';

import {
  GET_TWEETS_BEGIN,
  GET_TWEETS_SUCCESS,
  GET_TWEETS_ERROR,
  POST_TWEET_BEGIN,
  POST_TWEET_SUCCESS,
  POST_TWEET_ERROR,
  LIKE_SUCCESS,
  UNLIKE_SUCCESS,
  RETWEET_SUCCESS,
  UNRETWEET_SUCCESS,
} from './action';
import reducer from './tweetReducer';
import tweetsFetch from '../../api/fetchApi';

const initialState = {
  isLoading: false,
  error: '',
  tweets: [],
};

const TweetContext = React.createContext();

const TweetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const postTweet = async (data) => {
    console.log(data);
    dispatch({ type: POST_TWEET_BEGIN });
    try {
      let formData = new FormData();
      formData.append('tweetImg', data.image.data);
      formData.append('userImg', data.userImg);
      formData.append('replyBy', data.replyBy);
      formData.append('tweetText', data.tweetText);
      formData.append('userId', data.userId);
      const res = await tweetsFetch.post('/tweets', formData);
      if (res.data.status) {
        console.log(37, res.data);
        dispatch({ type: POST_TWEET_SUCCESS, payload: res.data.tweet });
      }
    } catch (error) {
      console.log(error.response);
      dispatch({ type: POST_TWEET_ERROR });
    }
  };

  const getTweets = async (username) => {
    dispatch({ type: GET_TWEETS_BEGIN });
    try {
      let res = await tweetsFetch.get(`/tweets/${username}`);
      if (res.data.status) {
        dispatch({ type: GET_TWEETS_SUCCESS, payload: res.data.tweets });
      }
      return res.data.tweets;
    } catch (error) {
      console.log(error.response);
      dispatch({ type: GET_TWEETS_ERROR });
    }
  };

  const setLike = async (tweetID, username) => {
    try {
      let res = await tweetsFetch.patch(`/tweets/likes/${tweetID}`);
      if (res.data.status && res.data.like.acknowledged) {
        dispatch({ type: LIKE_SUCCESS, payload: { tweetID, username } });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const setUnlike = async (tweetID, username) => {
    try {
      let res = await tweetsFetch.patch(`/tweets/unlikes/${tweetID}`);
      if (res.data.status) {
        dispatch({ type: UNLIKE_SUCCESS, payload: { tweetID, username } });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const setRetweet = async (tweetID, username) => {
    try {
      let res = await tweetsFetch.patch(`/tweets/retweets/${tweetID}`);
      if (res.data.status) {
        dispatch({ type: RETWEET_SUCCESS, payload: { tweetID, username } });
        console.log(res.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const setUnRetweet = async (tweetID, username) => {
    try {
      let res = await tweetsFetch.patch(`/tweets/unretweets/${tweetID}`);
      if (res.data.status) {
        dispatch({ type: UNRETWEET_SUCCESS, payload: { tweetID, username } });
        console.log(res.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <TweetContext.Provider
      value={{
        ...state,
        postTweet,
        getTweets,
        setLike,
        setUnlike,
        setRetweet,
        setUnRetweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

const useTweetContext = () => {
  return useContext(TweetContext);
};

export { TweetProvider, useTweetContext };
