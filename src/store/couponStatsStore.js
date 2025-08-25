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
const OWN_COUPONBOOK_ENDPOINT = '/couponbook/own-couponbook/';

const couponStatsStore = create((set) => ({
    stats: initialStats,
    loading: false,
    error: null,
    isReady: false, // ✅ 새로 추가된 상태

    fetchStats: async () => {
        set({ loading: true, error: null, isReady: false }); // ✅ 로딩 시작 시 isReady를 false로 설정

        try {
            const res = await api.get(OWN_COUPONBOOK_ENDPOINT);
            set({ stats: res.data, loading: false, isReady: true }); // ✅ 성공 시 isReady를 true로 설정
        } catch (err) {
            const status = err.response?.status;
            let finalError = '쿠폰북 조회 실패';

            if (status === 404) {
                try {
                    const created = await api.post(CREATE_ENDPOINT, {});
                    set({ stats: created.data, loading: false, isReady: true }); // ✅ 성공 시 isReady를 true로 설정
                    return;
                } catch (createErr) {
                    if (createErr.response?.status === 409) {
                        try {
                            const res2 = await api.get(OWN_COUPONBOOK_ENDPOINT);
                            set({ stats: res2.data, loading: false, error: null, isReady: true }); // ✅ 성공 시 isReady를 true로 설정
                            return;
                        } catch (reErr) {
                            finalError = '쿠폰북 재조회 실패';
                        }
                    } else {
                        finalError = createErr.response?.data?.detail || '쿠폰북 생성 실패';
                    }
                }
            } else {
                finalError = err.response?.data?.detail || '쿠폰북 조회 실패';
            }

            set({
                stats: initialStats,
                loading: false,
                error: finalError,
                isReady: false, // ✅ 실패 시 isReady를 false로 유지
            });
        }
    },
}));

export default couponStatsStore;
