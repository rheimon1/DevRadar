import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.115.1.105:3333',
});

export default api;