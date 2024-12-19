import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://192.168.0.203:8080/',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});