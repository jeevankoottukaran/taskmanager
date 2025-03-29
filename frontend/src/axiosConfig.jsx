

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://13.210.229.137', // local
  //baseURL: 'http://13.210.229.137', // live
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
