import { create } from 'zustand';

const ADMIN_REGIONS = {
  "서울특별시": {
    "강남구": ["압구정동", "청담동"],
    "서초구": ["서초동", "방배동"],
  },
  "경기도": {
    "수원시": ["영통구", "권선구"],
  },
  // ... 실제 전체 데이터로 대체
};

export const useLocationStore = create((set) => ({
  provinceList: Object.keys(ADMIN_REGIONS),
  cityList: [],
  districtList: [],
  province: '',
  city: '',
  district: '',
  
  selectProvince: (province) =>
    set((state) => {
      const cityList = province ? Object.keys(ADMIN_REGIONS[province]) : [];
      return {
        province: province,
        cityList,
        city: "",
        districtList: [],
        district: "",
      };
    }),
  selectCity: (city) =>
    set((state) => {
      const districtList =
        state.province && city
          ? ADMIN_REGIONS[state.province][city]
          : [];
      return {
        city: city,
        districtList,
        district: "",
      };
    }),
  selectDistrict: (district) => set({ district: district }),

  setProvince: (province) => set({ province }),
  setCity: (city) => set({ city }),
  setDistrict: (district) => set({ district })
}))