import { api } from './Api';

// 즐겨찾기 목록
export const getFavoriteCoupons = (couponbookId) => api.get(`/couponbook/couponbooks/${couponbookId}/favorites/`);

// 저장(전체) 목록
export const getSavedCoupons = (couponbookId) => api.get(`/couponbook/couponbooks/${couponbookId}/coupons/`);
