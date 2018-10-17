import axios from 'axios';
import { apiURL } from '../../config/index.js';

// 创建实例
const service = axios.create({
  baseURL: apiURL.BASE_API,
  timeout: 30000000 // 请求超时时间
});

// Add a request interceptor
service.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
service.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default service;