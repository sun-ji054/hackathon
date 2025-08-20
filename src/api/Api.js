import axios from "axios";

export const api = axios.create({
    baseURL: '127.0.01:8000',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});
