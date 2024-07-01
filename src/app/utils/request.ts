import axios from 'axios';

const request:any = axios.create({
  baseURL: './',
});

request.interceptors.response.use(function (response: any) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error: any) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log(error)
  return Promise.reject(error);
});

export default request;