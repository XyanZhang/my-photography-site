import axios from 'axios';

const requst = axios.create({
  baseURL: './',
});

export default requst;