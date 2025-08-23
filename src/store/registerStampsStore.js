import { create } from 'zustand';
import { api } from '../api/Api';

const API_PREFIX = (import.meta.env.VITE_API_PREFIX || '').replace(/\/$/, '');
const buildPath = (couponId) =>
    '/' +
    [
        API_PREFIX.replace(/^\//, ''), // "api" 또는 ""
        'couponbook',
        'coupons',
        String(couponId),
        'stamps',
    ]
        .filter(Boolean)
        .join('/') +
    '/';

const registerStampsStore = create((set) => ({
    loading: false,
    error: null,
    lastStamp: null, // 응답 보관 (예: { id })

    // 스탬프 적립
    registerStamp: async (couponId, receiptNumber) => {
        if (!couponId) {
            set({ error: '쿠폰 ID 없음' });
            return null;
        }
        set({ loading: true, error: null });
        try {
            const payload = receiptNumber ? { receipt_number: receiptNumber } : {};
            const { data } = await api.post(buildPath(couponId), payload); // POST /couponbook/coupons/{id}/stamps/
            set({ loading: false, lastStamp: data });
            return data; // { id: ... }
        } catch (e) {
            const s = e.response?.status;
            const msg = e.response?.data?.detail || e.response?.data?.message || '스탬프 적립 실패';
            set({ loading: false, error: `${msg} (${s ?? '네트워크'})` });
            return null;
        }
    },

    reset: () => set({ loading: false, error: null, lastStamp: null }),
}));

export default registerStampsStore;
