import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://hufs-likelion.store',
    headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
    (config) => {
        if (config.url === '/accounts/auth/register/customer/' || config.url === '/accounts/auth/login/') {
            delete config.headers.Authorization;
            return config;
        }
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => Promise.reject(err)
);

api.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error.res?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/';
        }
        return Promise.reject(error);
    }
);
