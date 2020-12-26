import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const defaultAxiosSetup = {
  baseURL: 'https://bankomaclarapi.herokuapp.com/',
  responseType: 'json',
};

const axiosInstance = axios.create(defaultAxiosSetup);

axiosInstance.interceptors.request.use(
  async function (config) {
    const tokens = await AsyncStorage.getItem('token');
    const token = !!tokens ? tokens : null;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   function (error) {
//     const errorResponse = error.response;
//     console.log(errorResponse);

//     if (!!errorResponse.data) throw errorResponse.data;
//     else {
//       const e = { ...errorResponse, title: 'Hata', detail: error.message };
//       throw e;
//     }
//   }
// );

export default axiosInstance;
