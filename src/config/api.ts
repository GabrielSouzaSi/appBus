import axios from 'axios';

// export const BASE_URL = 'http://104.248.225.49';
export const BASE_URL = 'http://beta.conexo.solutions:9001';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
