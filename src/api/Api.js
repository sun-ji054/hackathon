import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://hufs-likelion.store',
    headers: { 'Content-Type': 'application/json' },
});

/* api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
*/
