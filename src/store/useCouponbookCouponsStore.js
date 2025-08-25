// store/useCouponbookCouponsStore.js
import { create } from 'zustand';
import { api } from '../api/Api';

export const useCouponbookCouponsStore = create((set, get) => ({
    couponsById: {},
    order: [],
    loading: false,
    error: null,

    // 단일 쿠폰 상세 조회: GET /couponbook/coupons/{coupon_id}/
    fetchCoupon: async (couponId) => {
        if (!couponId) {
            set({ error: '쿠폰 ID 없음' });
            return;
        }
        set({ loading: true, error: null });
        try {
            const { data } = await api.get(`/couponbook/coupons/${couponId}/`);
            const idStr = String(data.id);
            const prev = get().couponsById;
            const order = get().order.includes(idStr) ? get().order : [...get().order, idStr];

            set({
                couponsById: { ...prev, [idStr]: data },
                order,
                loading: false,
                error: null,
            });
        } catch (e) {
            set({
                loading: false,
                error: e.response?.data?.detail || e.message || '불러오기 실패',
            });
        }
    },

    // (이전 코드 호환용) fetchCoupons 호출해도 내부적으로 단일 조회만 호출
    fetchCoupons: async (_couponbookId, couponId) => {
        return get().fetchCoupon(couponId);
    },
}));
