import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://mypublishjy.site',
    headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
    (config) => {
        if (config.url === '/accounts/auth/register/customer/' || config.url === '/accounts/auth/login/') {
            delete config.headers.Authorization;
            return config;
        }
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => Promise.reject(err)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            // refresh token 요청
            const refreshToken = localStorage.getItem('refresh_token');
            const res = await api.post('/accounts/auth/refresh/', { refresh: refreshToken });

            const newAccess = res.data.access;
            localStorage.setItem('access_token', newAccess);

            // 원래 요청 다시 보내기
            error.config.headers['Authorization'] = `Bearer ${newAccess}`;
            return axios(error.config);
        }
        return Promise.reject(error);
    }
);
