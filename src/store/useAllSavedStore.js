import { create } from 'zustand';
import { api } from '../api/Api';
import { useOwnStore } from './useOwnStore';

export const useAllSavedStore = create((set, get) => ({
    coupons: [],
    loading: false,
    error: null,

    fetchAllSaved: async () => {
        set({ loading: true, error: null });
        const { own } = useOwnStore.getState();

        if (!own?.id) {
            set({ error: '쿠폰북 ID가 없습니다.', loading: false });
            return;
        }

        try {
            const response = await api.get(`/couponbook/couponbooks/${own.id}/coupons/`);
            // ✅ API 응답이 성공하면, 데이터가 비어있더라도 coupons 상태를 업데이트합니다.
            set({ coupons: response.data, loading: false });
        } catch (error) {
            // ✅ API 호출 자체가 실패했을 때만 error 상태를 설정합니다.
            set({ error: error.message, loading: false });
        }
    },
}));
