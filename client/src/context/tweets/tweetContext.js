import React, { useReducer, useContext } from "react";

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
import reducer from "./tweetReducer";
import tweetsFetch from "../../api/fetchApi";

const initialState = {
  isLoading: false,
  error: "",
  tweets: [],
  tweet: null,
};

const TweetContext = React.createContext();

const TweetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const postTweet = async (data) => {
    dispatch({ type: POST_TWEET_BEGIN });
    try {
      let formData = new FormData();
      formData.append("tweetImg", data.image?.data);
      formData.append("userImg", data.userImg);
      formData.append("replyBy", data.replyBy);
      formData.append("tweetText", data.tweetText);
      if (data.replyTo) {
        formData.append("replyTo", data.replyTo);
      }
      formData.append("userId", data.userId);
      const res = await tweetsFetch.post("/tweets", formData);

      if (res.data.status) {
        dispatch({ type: POST_TWEET_SUCCESS, payload: res.data.tweet });
      }
    } catch (error) {
      // console.log(error);
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
    } catch (error) {
      // console.log(error.response);
      dispatch({ type: GET_TWEETS_ERROR });
    }
  };

  const deleteTweet = async (tweetId) => {
    try {
      let res = await tweetsFetch.delete(`/tweets/${tweetId}`);
      console.log(res)
      return true
    } catch (error) {
      console.log(error);
    }
  };

  const getTimeline = async () => {
    dispatch({ type: GET_TWEETS_BEGIN });
    try {
      if (localStorage.getItem("token")) {
        let { data } = await tweetsFetch.get(`/tweets/timeline`);
        if (data.status) {
          dispatch({ type: GET_TWEETS_SUCCESS, payload: data.tweets });
        }
      }
    } catch (error) {
      console.log(error.response);
      dispatch({ type: GET_TWEETS_ERROR });
    }
  };

  const setLike = async (tweetID, username) => {
    try {
      let { data } = await tweetsFetch.patch(`/tweets/${tweetID}/likes`);

      dispatch({ type: LIKE_SUCCESS, payload: data.tweets });
    } catch (error) {
      return error;
    }
  };

  const setRetweet = async (tweetID, username) => {
    try {
      let { data } = await tweetsFetch.post(`/tweets/${tweetID}/retweets`);

      console.log(data);
      if (data.status) {
        dispatch({ type: RETWEET_SUCCESS, payload: data.tweets });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const saveTweet = async (tweetID, location) => {
    try {
      let { data } = await tweetsFetch.post(`/tweets/${tweetID}/save`);
      if (data.status) {
        if (location.includes("bookmarks")) {
          dispatch({ type: SAVE_TWEET_SUCCESS, payload: data.tweets });
        } else {
          dispatch({ type: SAVE_TWEET_SUCCESS, payload: data.message });
        }
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const getBookmarks = async (username) => {
    dispatch({ type: GET_BOOKMARKS_BEGIN });
    try {
      let { data } = await tweetsFetch.get(`/tweets/${username}/bookmarks`);
      if (data.status) {
        dispatch({ type: GET_BOOKMARKS_SUCCESS, payload: data.tweets });
      }
    } catch (error) {
      console.log(error.response);
      dispatch({ type: GET_BOOKMARKS_ERROR, payload: "error" });
    }
  };

  return (
    <TweetContext.Provider
      value={{
        ...state,
        postTweet,
        getTweets,
        setLike,
        setRetweet,
        saveTweet,
        getTimeline,
        getBookmarks,
        deleteTweet,
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
