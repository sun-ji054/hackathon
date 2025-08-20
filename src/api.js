import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hufs-likelion.store',
    withCredentials: true,
});

// 토큰이 있으면 헤더에 자동으로 넣기
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
