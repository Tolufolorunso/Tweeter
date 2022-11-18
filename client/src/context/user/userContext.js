import React, { useReducer, useContext } from "react";

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
  UPDATEPROFILE_BEGIN,
  UPDATEPROFILE_ERROR,
  UPDATEPROFILE_SUCCESS,
} from "./action";
import reducer from "./userReducer";
import authFetch from "../../api/fetchApi";

const token = localStorage.getItem("token");
let user = localStorage.getItem("user");
// const following = localStorage.getItem('following');
// const followers = localStorage.getItem('followers');

const initialState = {
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token ? token : null,
  // following: following ? JSON.parse(following) : [],
  // followers: followers ? JSON.parse(followers) : [],
  following: [],
  followers: [],
  error: "",
};

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const register = async (data) => {
    dispatch({ type: REGISTER_BEGIN });
    try {
      const res = await authFetch.post("/auth/register", data);
      if (res.data.status) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

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
          payload: "Something went wrong",
        });
      }
      clearError();
    }
  };

  const login = async (userLogin) => {
    dispatch({ type: LOGIN_BEGIN });
    try {
      const { data } = await authFetch.post("/auth/login", userLogin);
      if (data.status) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        dispatch({ type: LOGIN_SUCCESS, payload: data });
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
          payload: "Something went wrong",
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

  const updateProfile = async (username, data) => {
    dispatch({ type: UPDATEPROFILE_BEGIN });
    try {
      const res = await authFetch.patch(`/users/${username}`, data);
      if (res.data.status) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        dispatch({ type: UPDATEPROFILE_SUCCESS, payload: res.data.user });
      }
      return true;
    } catch (error) {
      if (error.response?.data) {
        dispatch({
          type: UPDATEPROFILE_ERROR,
          payload: error.response.data.message,
        });
      } else {
        dispatch({
          type: UPDATEPROFILE_ERROR,
          payload: "Something went wrong",
        });
      }
      clearError();
    }
  };

  const setUser = async (payload) => {
    console.log(payload);
    dispatch({ type: LOGIN_SUCCESS, payload });
  };

  const follow = async (userId) => {
    try {
      const { data } = await authFetch.patch(`/users/${userId}/follow`);
      // localStorage.setItem('following', JSON.stringify(data.following));
      dispatch({ type: FOLLOW_SUCCESS, payload: data.user });
    } catch (error) {
      console.log(error.response);
    }
  };

  const loadFollowing = async (userId) => {
    console.log(userId);
    try {
      const { data } = await authFetch(`/users/${userId}/following`);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const loadFollowers = async (userId) => {
    try {
      const { data } = await authFetch(`/users/${userId}/followers`);
      console.log(data);
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
      value={{
        ...state,
        register,
        login,
        logout,
        updateProfile,
        follow,
        setUser,
        loadFollowing,
        loadFollowers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
