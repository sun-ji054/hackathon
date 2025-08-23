// src/api/Api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hufs-likelion.store',
    headers: { 'Content-Type': 'application/json' },
    // 쿠키 인증을 쓴다면 다음 줄 주석 해제
    // withCredentials: true,
});

// 인증이 필요없는 엔드포인트
const AUTH_WHITELIST = ['/accounts/auth/register/customer/', '/accounts/auth/login/', '/accounts/auth/refresh/'];

api.interceptors.request.use(
    (config) => {
        // 헤더 안전 초기화
        config.headers = config.headers || {};

        const url = config.url || '';

        // 화이트리스트는 Authorization 제거
        if (AUTH_WHITELIST.some((p) => url.endsWith(p))) {
            delete config.headers.Authorization;
            return config;
        }

        // 로컬스토리지에서 토큰 부착
        const token = localStorage.getItem('token'); // 저장 키 확인!
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            delete config.headers.Authorization;
        }
        return config;
    },
    (err) => Promise.reject(err)
);

api.interceptors.response.use(
    (res) => res,
    (error) => {
        const status = error.response?.status; // <- response 사용
        if (status === 401) {
            localStorage.removeItem('token');
            // 히스토리에 남기지 않으려면 replace
            window.location.replace('/');
        }
        return Promise.reject(error);
    }
);

export default api;
export { api };
