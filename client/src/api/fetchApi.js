import axios from 'axios';
// import { Navigate } from 'react-router-dom';
import { BASEURL } from '../utils/contants';
const token = localStorage.getItem('token');

// axios
const fetchApi = axios.create({
  baseURL: BASEURL,
});

// request
fetchApi.interceptors.request.use(
  (config) => {
    config.headers.common['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response
fetchApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log(error.response);
    console.log(token);
    if (
      error.response.status === 401 &&
      error.response.statusText === 'Unauthorized'
    ) {
      console.log(401);
      // localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default fetchApi;
