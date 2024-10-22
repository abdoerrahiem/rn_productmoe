import axios from 'axios';
import {showToast} from '@src/utils/toast';
import {BASE_URL} from '@src/utils/constant';

const apiBaseConfig = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
  timeout: 10000,
});

apiBaseConfig.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return error;
  },
);

apiBaseConfig.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    showToast(
      'error',
      error?.response?.data?.message ?? error.response.message,
    );
    return error;
  },
);

export default apiBaseConfig;
