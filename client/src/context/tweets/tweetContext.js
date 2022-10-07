import React, { useReducer, useContext } from 'react';

import {
  GET_TWEETS_BEGIN,
  GET_TWEETS_SUCCESS,
  GET_TWEETS_ERROR,
  POST_TWEET_BEGIN,
  POST_TWEET_SUCCESS,
  POST_TWEET_ERROR,
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

  const getTweets = async () => {
    dispatch({ type: GET_TWEETS_BEGIN });
    try {
      let res = await tweetsFetch.get('/tweets');
      if (res.data.status) {
        dispatch({ type: GET_TWEETS_SUCCESS, payload: res.data.tweets });
      }
    } catch (error) {
      console.log(error.response);
      dispatch({ type: GET_TWEETS_ERROR });
    }
  };

  const setLike = async (tweetID) => {
    console.log(tweetID);
    // try {
    //   let res = await tweetsFetch.patch(
    //     `/tweets/likes/${data.tweetId}`,
    //     tweetID
    //   );
    //   if (res.data.status) {
    //     console.log(res.data);
    //   }
    // } catch (error) {
    //   console.log(error.response);
    // }
  };

  const setRetweet = async (tweetID) => {
    console.log(tweetID);
    // try {
    //   let res = await tweetsFetch.patch(
    //     `/tweets/retweets/${tweetID}`,
    //     data
    //   );
    //   if (res.data.status) {
    //     console.log(res.data);
    //   }
    // } catch (error) {
    //   console.log(error.response);
    // }
  };

  return (
    <TweetContext.Provider
      value={{ ...state, postTweet, getTweets, setLike, setRetweet }}
    >
      {children}
    </TweetContext.Provider>
  );
};

const useTweetContext = () => {
  return useContext(TweetContext);
};

export { TweetProvider, useTweetContext };
