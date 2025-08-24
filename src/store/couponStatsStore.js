import { create } from 'zustand';
import { api } from '../api/Api';

const initialStats = {
    id: null,
    favorite_coupons: 0,
    coupon_counts: 0,
    stamp_counts: 0,
    user: null,
};

const CREATE_ENDPOINT = '/couponbook/';

const couponStatsStore = create((set) => ({
    stats: initialStats,
    loading: false,
    error: null,

    fetchStats: async () => {
        set({ loading: true, error: null });
        try {
            // 내 쿠폰북 조회
            const res = await api.get('/couponbook/own-couponbook/');
            set({ stats: res.data, loading: false });
        } catch (err) {
            const status = err.response?.status;

            if (status === 404) {
                // 없으면 생성 시도
                try {
                    const created = await api.post(CREATE_ENDPOINT, {}); // 필요하면 body 넣기
                    set({ stats: created.data, loading: false });
                } catch (createErr) {
                    // 동시 생성/중복 등으로 409면 다시 조회
                    if (createErr.response?.status === 409) {
                        try {
                            const res2 = await api.get('/couponbook/own-couponbook/');
                            set({ stats: res2.data, loading: false, error: null });
                        } catch (reErr) {
                            set({ stats: initialStats, loading: false, error: '쿠폰북 조회 실패' });
                        }
                    } else {
                        set({
                            stats: initialStats,
                            loading: false,
                            error: createErr.response?.data?.detail || '쿠폰북 생성 실패',
                        });
                    }
                }
                return;
            }

            set({
                stats: initialStats,
                loading: false,
                error: err.response?.data?.detail || '쿠폰북 조회 실패',
            });
        }
    },
}));

export default couponStatsStore;
