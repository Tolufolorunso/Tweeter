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
  FOLLOW_SUCCESS,
  UNFOLLOW_SUCCESS,
} from './action';
import reducer from './userReducer';
import authFetch from '../../api/fetchApi';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const following = localStorage.getItem('following');
const followers = localStorage.getItem('followers');

const initialState = {
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token ? token : null,
  following: following ? JSON.parse(following) : [],
  followers: followers ? JSON.parse(followers) : [],
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
        localStorage.setItem(
          'following',
          JSON.stringify(res.data.user.following)
        );
        localStorage.setItem(
          'followers',
          JSON.stringify(res.data.user.followers)
        );
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

  const setUser = async (payload) => {
    console.log(payload);
    dispatch({ type: LOGIN_SUCCESS, payload });
  };

  const follow = async (userId) => {
    try {
      const res = await authFetch.patch(`/users/${userId}/follow`);
      localStorage.setItem('following', JSON.stringify(res.data.following));
      dispatch({ type: FOLLOW_SUCCESS, payload: res.data.following });
    } catch (error) {
      console.log(error.response);
    }
  };

  const unfollow = async (userId) => {
    try {
      const res = await authFetch.patch(`/users/${userId}/unfollow`);
      dispatch({ type: UNFOLLOW_SUCCESS, payload: res.data.following });
    } catch (error) {
      console.log(error.response);
    }
  };

  const clearError = (duration = 3000) => {
    setTimeout(function () {
      dispatch({ type: CLEAR_ERROR });
    }, duration);
  };

  return (
    <AuthContext.Provider
      value={{ ...state, register, login, logout, follow, unfollow, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };