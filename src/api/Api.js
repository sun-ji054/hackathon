// src/api/Api.js
import axios from 'axios';
import { userInfoStore } from '../store/userInfoStore';

export const api = axios.create({
    baseURL: 'https://port-0-couponbook-mi41xmxo46808c9c.sel3.cloudtype.app/',
    headers: { 'Content-Type': 'application/json' },
});

// 로그인/회원가입 요청에는 토큰 안 붙이기
const NO_AUTH_URLS = ['/accounts/auth/register/customer/', '/accounts/auth/login/'];

api.interceptors.request.use(
    (config) => {
        // url이 상대경로로 들어올 수도 있어서 endsWith로 체크
        if (config.url && NO_AUTH_URLS.some((url) => config.url.endsWith(url))) {
            if (config.headers?.Authorization) {
                delete config.headers.Authorization;
            }
            return config;
        }

        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => Promise.reject(err)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (!error.response) {
            return Promise.reject(error);
        }

        const originalRequest = error.config;

        // 401 + 아직 재시도 안 했고 + refresh 요청 자체가 아닐 때만 처리
        if (
            error.response.status === 401 &&
            !originalRequest._retry &&
            !(originalRequest.url && originalRequest.url.endsWith('/accounts/auth/refresh/'))
        ) {
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem('refresh_token');

            // refresh 토큰 없으면 → 그냥 로그아웃 처리
            if (!refreshToken) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');

                // zustand userInfoStore 비우기
                userInfoStore.persist?.clearStorage?.();

                return Promise.reject(error);
            }

            try {
                // 서버가 기대하는 key: refresh
                const res = await api.post('/accounts/auth/refresh/', {
                    refresh: refreshToken,
                });

                const newAccess = res.data.access;

                // 새 access 토큰 저장
                localStorage.setItem('access_token', newAccess);

                // 원래 요청에 새 토큰 심고 재요청
                originalRequest.headers = originalRequest.headers || {};
                originalRequest.headers.Authorization = `Bearer ${newAccess}`;

                return api(originalRequest);
            } catch (err) {
                console.error('토큰 갱신 실패:', err);

                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');

                userInfoStore.persist?.clearStorage?.();

                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);
