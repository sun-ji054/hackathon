import { create } from "zustand";
import { api } from "../api/Api";
import { useOwnStore } from "./useOwnStore";

export const useAllSavedStore = create((set, get) => ({
  coupons: [],
  loading: false,
  error: null,
  selectedTag: "전체",

  fetchAllSaved: async (params = {}) => {
    const { own } = useOwnStore.getState();

    if (!own?.id) {
      set({ error: "쿠폰북 ID가 없습니다.", loading: false });
      return;
    }

    set({ loading: true, error: null });
    try {
      const response = await api.get(
        `/couponbook/couponbooks/${own.id}/coupons/`,
        { params }
      );
      set({ coupons: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  setSelectedTag: (tag) => set({ selectedTag: tag }),
}));
