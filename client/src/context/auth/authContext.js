import React, { useReducer, useContext } from 'react';

import axios from 'axios';

import { REGISTER_BEGIN } from './action';
import reducer from './reducer';

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

  // axios
  const authFetch = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
  });
  // request

  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common['Authorization'] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        // logoutUser()
      }
      return Promise.reject(error);
    }
  );

  const register = async (data) => {
    dispatch({ type: REGISTER_BEGIN });
    try {
      const res = await authFetch.post('/users/register', data);
    } catch (error) {}
  };

  return (
    <AppContext.Provider value={{ ...state, register }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
