import React, { useReducer, useContext } from 'react';

import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_BEGIN,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGOUT,
  CLEAR_ERROR,
} from './action';
import reducer from './authReducer';
import authFetch from '../../api/fetchApi';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState = {
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token ? token : null,
  error: '',
};

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const register = async (data) => {
    dispatch({ type: REGISTER_BEGIN });
    try {
      const res = await authFetch.post('/auth/register', data);
      if (res.data.status) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      }
    } catch (error) {
      if (error.response?.data) {
        dispatch({
          type: REGISTER_ERROR,
          payload: error.response.data.message,
        });
      } else {
        dispatch({
          type: REGISTER_ERROR,
          payload: 'Something went wrong',
        });
      }
      clearError();
    }
  };

  const login = async (data) => {
    dispatch({ type: LOGIN_BEGIN });
    try {
      const res = await authFetch.post('/auth/login', data);
      if (res.data.status) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      }
    } catch (error) {
      if (error.response?.data) {
        dispatch({
          type: LOGIN_ERROR,
          payload: error.response.data.message,
        });
      } else {
        dispatch({
          type: LOGIN_ERROR,
          payload: 'Something went wrong',
        });
      }
      clearError();
    }
  };

  const logout = () => {
    localStorage.clear();
    dispatch({
      type: LOGOUT,
    });
  };

  const getUser = async (username) => {
    try {
      const res = await authFetch(`/users/${username}`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const clearError = (duration = 3000) => {
    setTimeout(function () {
      dispatch({ type: CLEAR_ERROR });
    }, duration);
  };

  return (
    <AuthContext.Provider
      value={{ ...state, register, login, logout, getUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
