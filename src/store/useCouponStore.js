import { create } from 'zustand';
import axios from 'axios';
import { api } from '../api/Api';

export const useCouponStore = create((set) => ({
    coupons: [],
    loading: false,
    error: null,
    selectedTag: '전체',

    fetchCoupons: async () => {
        set({ loading: true, error: null });
        try {
            const response = await api.get('/couponbook/coupon-templates');
            set({ coupons: response.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    setSelectedTag: (tag) => set({selectedTag: tag}),
    filteredCoupons: () => {
        const state = useCouponStore.getState();
        if (state.selectedTag === '전체') return state.coupons;
        return state.coupons.filter(c => c.tags?.includes(state.selectedTag));
    }
}));
