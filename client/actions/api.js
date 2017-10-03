let api = '/api/v1';

if (process.env.NODE_ENV === 'development') {
  api = 'http://localhost:4000/api/v1';
}

const API = api;

export default API;
