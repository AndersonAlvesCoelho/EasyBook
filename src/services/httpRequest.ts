import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
});

httpRequest.interceptors.request.use(config => {
  const apiKey = 'x83uqM96Gn6tzTX4mGdEScfWl_gj1xMMAlqTUmKmYeY';
  if (apiKey) {
    config.headers.Authorization = `Client-ID ${apiKey}`;
  }
  return config;
});

export default httpRequest;
