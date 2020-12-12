import { SecureStore } from 'expo';

const defaultAxiosSetup = {
  baseURL: 'https://bankomaclarapi.herokuapp.com/',
  responseType: 'json',
};

const axiosInstance = axios.create(defaultAxiosSetup);

axiosInstance.interceptors.request.use(
  async function (config) {
    const tokens = await SecureStore.getItemAsync('token');
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

export default axiosInstance;
