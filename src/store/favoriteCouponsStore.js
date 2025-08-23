import { create } from 'zustand';
import { api } from '../api/Api';

const API_PREFIX = (import.meta.env.VITE_API_PREFIX || '').replace(/\/$/, '');

function buildPath(couponbookId) {
    const parts = [
        API_PREFIX.replace(/^\//, ''), // "api" 혹은 ""
        'couponbook',
        'couponbooks',
        String(couponbookId),
        'favorites',
    ];
    return '/' + parts.filter(Boolean).join('/') + '/';
}

const favoriteCouponsStore = create((set) => ({
    items: [],
    loading: false,
    error: null,

    // 즐겨찾기 목록 조회
    fetchFavorites: async (couponbookId) => {
        if (!couponbookId) {
            set({ loading: false, items: [], error: '쿠폰북 ID 없음' });
            return;
        }
        set({ loading: true, error: null });
        try {
            const { data } = await api.get(`/couponbook/couponbooks/${couponbookId}/favorites/`);
            // GET /couponbook/couponbooks/{id}/favorites/
            const mapped = (Array.isArray(data) ? data : []).map((fav) => {
                const c = fav.coupon || {};
                const place = c.place || {};
                const rewardInfo = c.reward_info || {};
                const total = c.max_stamps ?? rewardInfo.amount ?? 0;
                const progress = c.current_stamps ?? 0;
                const days = c.days_remaining;

                return {
                    // CouponCard가 쓰는 필드들
                    name: place.name || '(이름 미상)',
                    description: `${rewardInfo.amount ?? total}회 방문하면 ${rewardInfo.reward ?? ''}`,
                    progress,
                    total,
                    expire: typeof days === 'number' ? `${days}일 남음` : '',
                    photo: place.image_url || '',

                    // 나중에 쓸 수도 있는 원본/ID들
                    id: fav.id, // favorite id
                    couponId: c.id, // coupon id
                    raw: fav,
                };
            });
            set({ items: mapped, loading: false });
        } catch (e) {
            const s = e.response?.status;
            set({ loading: false, error: `즐겨찾기 조회 실패 (${s ?? '네트워크'})` });
        }
    },
}));

export default favoriteCouponsStore;
