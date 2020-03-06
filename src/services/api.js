import axios from 'axios';

// custom url for REST api requests
const url = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: url
});

export default api;
