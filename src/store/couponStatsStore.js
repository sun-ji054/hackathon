import { create } from 'zustand';
import { api } from '../api/Api';

const couponStatsStore = create((set) => ({
    stats: {
        id: null,
        favorite_coupons: 0,
        coupon_counts: 0,
        stamp_counts: 0,
        user: null,
    },
    loading: false,
    error: null,

    fetchStats: async () => {
        set({ loading: true, error: null });
        try {
            const res = await api.get('/couponbook/own-couponbook/');
            set({ stats: res.data, loading: false });
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },
}));

export default couponStatsStore;
