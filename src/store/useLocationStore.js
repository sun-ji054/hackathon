import { create } from 'zustand';
import { api } from '../api/Api';
import { persist } from 'zustand/middleware';

export const useLocationStore = create(
  persist(
  (set) => ({
  // 서버에서 받아온 원본 데이터
  locations: [],

  provinceList: [],
  cityList: [],
  districtList: [],
  province: '',
  city: '',
  district: '',

  // API 호출
  fetchLocations: async () => {
    try {
      const response = await api.get("/api/locations/");
      const data = response.data;

      set({
        locations: data,
        provinceList: Object.keys(data),
      });
    } catch (error) {
      console.error("지역 데이터 가져오기 실패:", error);
    }
  },

  selectProvince: (province) =>
    set((state) => ({
      province,
      cityList: province ? Object.keys(state.locations[province] || {}) : [],
      city: '',
      districtList: [],
      district: '',
    })),

  selectCity: (city) =>
    set((state) => ({
      city,
      districtList: state.province && city ? state.locations[state.province][city] || [] : [],
      district: '',
    })),

  selectDistrict: (district) => set({ district }),
}),{
  name: 'useLocationStorage',
  partialize: (state) => ({district: state.district})
}));
