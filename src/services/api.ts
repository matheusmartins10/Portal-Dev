import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portalcbol.herokuapp.com',
});

export default api;
