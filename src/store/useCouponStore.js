import { create } from 'zustand';
import { api } from '../api/Api';

export const useCouponStore = create((set) => ({
    coupons: [],
    loading: false,
    error: null,
    selectedTag: "전체",

    fetchCoupons: async (params = {}, showLoading = true) => {
        if (showLoading) set({ loading: true, error: null });
        try {
            const response = await api.get("/couponbook/coupon-templates", { params });
            set({ coupons: response.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    setSelectedTag: (tag) => set({ selectedTag: tag }),
}));
