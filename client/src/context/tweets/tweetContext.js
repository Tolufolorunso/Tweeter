import React, { useReducer, useContext } from 'react';

import {
  GET_TWEETS_BEGIN,
  GET_TWEETS_SUCCESS,
  GET_TWEETS_ERROR,
} from './action';
import reducer from './tweetReducer';
import authFetch from '../../api/fetchApi';

const initialState = {
  isLoading: false,
  error: '',
  tweets: [],
};

const TweetContext = React.createContext();

const TweetProvider = ({ children }) => {
  const [state] = useReducer(reducer, initialState);

  return (
    <TweetContext.Provider value={{ ...state }}>
      {children}
    </TweetContext.Provider>
  );
};

const useTweetContext = () => {
  return useContext(TweetContext);
};

export { TweetProvider, useTweetContext };
