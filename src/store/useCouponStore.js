import { create } from 'zustand';
import { api } from '../api/Api';

export const useCouponStore = create((set) => ({
    coupons: [],
    loading: false,
    error: null,
    selectedTag: '전체',

    // params: { tag, district, is_open ... }
    fetchCoupons: async (params = {}) => {
        set({ loading: true, error: null });
        try {
            const response = await api.get('/couponbook/coupon-templates', { params });
            console.log("✅ coupons API response:", response.data);
            set({ coupons: response.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    setSelectedTag: (tag) => set({ selectedTag: tag }),
}));
