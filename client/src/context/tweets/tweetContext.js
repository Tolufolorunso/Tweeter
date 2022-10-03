import React, { useReducer, useContext } from 'react';

import {} from './action';
import reducer from './authReducer';
// import authFetch from '../../api/fetchApi';

const initialState = {
  isLoading: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useTweetContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useTweetContext };
