import React, { useReducer, useContext } from 'react';

import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
} from './action';
import reducer from './reducer';
import authFetch from '../../api/fetchApi';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState = {
  isLoading: false,
  showAlert: false,
  user: user ? JSON.parse(user) : null,
  token: token,
  errors: null,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const register = async (data) => {
    dispatch({ type: REGISTER_BEGIN });
    console.log(data);
    try {
      const res = await authFetch.post('/users/register', data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: REGISTER_SUCCESS });
  };

  const login = async (data) => {
    dispatch({ type: LOGIN_BEGIN });
    console.log(data);
    try {
      const res = await authFetch.post('/users/login', data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: LOGIN_SUCCESS });
  };

  return (
    <AppContext.Provider value={{ ...state, register, login }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
