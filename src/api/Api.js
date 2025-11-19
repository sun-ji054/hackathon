// src/api/Api.js
import axios from "axios";
import { userInfoStore } from "../store/userInfoStore";

export const api = axios.create({
  baseURL: "https://port-0-couponbook-mi41xmxo46808c9c.sel3.cloudtype.app/",
  headers: { "Content-Type": "application/json" },
});

// 로그인/회원가입 요청에는 토큰 제외
const NO_AUTH_URLS = [
  "/accounts/auth/register/customer/",
  "/accounts/auth/login/",
];

api.interceptors.request.use(
  (config) => {
    if (config.url && NO_AUTH_URLS.some((url) => config.url.endsWith(url))) {
      if (config.headers?.Authorization) {
        delete config.headers.Authorization;
      }
      return config;
    }

    const token = localStorage.getItem("access_token");
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
    if (!error.response) return Promise.reject(error);

    const originalRequest = error.config;

    // refresh 요청 자체는 제외
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      !(
        originalRequest.url &&
        originalRequest.url.endsWith("/accounts/auth/refresh/")
      )
    ) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refresh_token");
      if (!refreshToken) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        userInfoStore.persist?.clearStorage?.();
        return Promise.reject(error);
      }

      try {
        const res = await api.post("/accounts/auth/refresh/", {
          refresh: refreshToken, // 서버에서 기대하는 key
        });

        const newAccess = res.data.access;
        localStorage.setItem("access_token", newAccess);

        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return api(originalRequest);
      } catch (err) {
        console.error("토큰 갱신 실패:", err);

        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        userInfoStore.persist?.clearStorage?.();

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);
