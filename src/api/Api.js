// src/api/Api.js
import axios from 'axios';

export const api = axios.create({
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
        const token = localStorage.getItem('access_token');
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
  response => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const refreshToken = localStorage.getItem("refresh_token");
      if (!refreshToken) {
        // 토큰이 없으면 로그아웃 처리
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        userInfoStore.persist?.clearStorage();
        useLocationStore.persist?.clearStorage();
        return Promise.reject(error);
      }

      try {
        // 서버가 기대하는 key: refresh_token
        const res = await api.post("/accounts/auth/refresh/", { refresh_token: refreshToken });
        const newAccess = res.data.access;
        localStorage.setItem("access_token", newAccess);

        // 원래 요청 다시 보내기
        error.config.headers['Authorization'] = `Bearer ${newAccess}`;
        return api(error.config);
      } catch (err) {
        console.error("토큰 갱신 실패:", err);
        // refresh 실패 시 로그아웃 처리
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        userInfoStore.persist?.clearStorage();
        useLocationStore.persist?.clearStorage();
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
export { api };
