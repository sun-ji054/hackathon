// src/store/registerStampsStore.js
import { create } from 'zustand';
import { api } from '../api/Api';

const registerStampsStore = create((set) => ({
    loading: false,
    error: null,
    lastResponse: null,

    // POST /couponbook/coupons/{couponId}/stamps/
    registerStamp: async (couponId, receiptNumber) => {
        set({ loading: true, error: null, lastResponse: null });
        try {
            if (!couponId) throw new Error('쿠폰 ID 없음');
            if (!receiptNumber) throw new Error('영수증 번호 없음');

            const payload = { receipt: String(receiptNumber).trim() };
            const { data } = await api.post(`/couponbook/coupons/${couponId}/stamps/`, payload, {
                headers: { 'Content-Type': 'application/json' },
            });

            set({ loading: false, lastResponse: data });
            return true;
        } catch (e) {
            const status = e.response?.status;
            const body = e.response?.data;
            console.error('스탬프 등록 실패:', status, body || e.message);

            const msg =
                (typeof body === 'string' && body) ||
                body?.detail ||
                body?.receipt_number?.[0] ||
                body?.receipt?.[0] ||
                `요청이 거절됐습니다 (HTTP ${status ?? '네트워크'})`;

            set({ loading: false, error: msg });
            return false;
        }
    },
}));

export default registerStampsStore;
