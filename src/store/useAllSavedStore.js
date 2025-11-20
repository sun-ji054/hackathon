import { create } from 'zustand';
import { api } from '../api/Api';
import couponStatsStore from './couponStatsStore';

export const useAllSavedStore = create((set, get) => ({
    coupons: [],
    loading: false,
    error: null,
    selectedTag: '전체', // 

    setSelectedTag: (tag) => set({ selectedTag: tag }), // 

    fetchAllSaved: async (params = {}) => {
        set({ loading: true, error: null });

        // 1. ID 확인
        let id = couponStatsStore.getState().stats.id;

        // 2. ID 없으면 fetch 시도
        if (!id) {
            await couponStatsStore.getState().fetchStats();
            id = couponStatsStore.getState().stats.id;
        }

        // 3. 여전히 없으면 에러
        if (!id) {
            set({ error: '쿠폰북 ID가 없습니다.', loading: false });
            return;
        }

        try {
            const response = await api.get(`/couponbook/couponbooks/${id}/coupons/`, {
                params, //  params 전달 (정렬, 필터 등)
            });
            set({ coupons: response.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));
