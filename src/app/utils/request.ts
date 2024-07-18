import axios from 'axios';

const request:any = axios.create({
  baseURL: '/',
});

request.interceptors.response.use(function (response: any) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  if(response.data.code == 200) {
    return response.data.data;
  }
}, function (error: any) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log(error)
  let response = error.response
  if(!response) {
    return Promise.reject(error);
  }
  if(response.data.code == 409) {
    return response.data.data;
  }
});

export default request;