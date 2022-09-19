import axios from 'axios';
import { BASEURL } from '../utils/contants';
const token = localStorage.getItem('token');

// axios
const authFetch = axios.create({
  baseURL: BASEURL,
});

// request
authFetch.interceptors.request.use(
  (config) => {
    config.headers.common['Authorization'] = `Bearer ${token}`;
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

export default authFetch;
