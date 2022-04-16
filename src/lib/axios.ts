import axios from 'axios';

export const githubUrl = axios.create({
  baseURL: 'https://api.github.com',
});
