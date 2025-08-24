// "저장한 모든 쿠폰" 정보 담긴 스토어임 //
import { create } from 'zustand';
import { api } from '../api/Api';

export const useCouponbookCouponsStore = create((set, get) => ({
    couponsById: {},
    order: [],
    loading: false,
    error: null,

    // couponbookId가 없으면 내 쿠폰북 id를 먼저 조회
    fetchCoupons: async (couponbookId) => {
        set({ loading: true, error: null });
        try {
            let id = couponbookId;
            if (!id) {
                const { data: mine } = await api.get('/couponbook/own-couponbook/');
                id = mine.id; // 내 쿠폰북 id
            }
            const { data } = await api.get(`/couponbook/couponbooks/${id}/coupons/`);
            const map = Object.fromEntries(data.map((c) => [String(c.id), c]));
            const order = data.map((c) => String(c.id));
            set({ couponsById: map, order, loading: false, error: null });
        } catch (e) {
            set({
                loading: false,
                error: e.response?.data?.detail || e.message || '불러오기 실패',
            });
        }
    },
}));
