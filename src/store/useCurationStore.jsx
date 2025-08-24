import { create } from "zustand";
import { api } from '../api/Api';

export const useCurationStore = create((set) => ({
    curation: [],
    loading: false,
    error: null,

    fetchCuration: async () => {
        set({ loading: true, error: null });
        try {
            const response = await api.get('/couponbook/own-couponbook/curation/');
            set({ curation: response.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

}));
