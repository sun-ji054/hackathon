import { create } from 'zustand';

export const useInfoStore = create((set) => ({
  name: '',
  email: '',
  password: '',
  phoneNum: '',
  agree: false,
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setPhoneNum: (phoneNum) => set({ phoneNum }),
  setAgree: () => set((state) => ({ agree: !state.agree }))
}))

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

export const useRegionStore = create((set) => ({
  sidoList: Object.keys(ADMIN_REGIONS),
  gugunList: [],
  dongList: [],
  sido: "",
  gugun: "",
  dong: "",
  selectSido: (sido) =>
    set((state) => {
      const gugunList = sido ? Object.keys(ADMIN_REGIONS[sido]) : [];
      return {
        sido: sido,
        gugunList,
        gugun: "",
        dongList: [],
        dong: "",
      };
    }),
  selectGugun: (gugun) =>
    set((state) => {
      const dongList =
        state.sido && gugun
          ? ADMIN_REGIONS[state.sido][gugun]
          : [];
      return {
        gugun: gugun,
        dongList,
        dong: "",
      };
    }),
  selectDong: (dong) => set({ dong: dong }),
}))

export const useLocationStore = create((set) => ({
  location: '',
  setLocation: (location) => set({location})
}))



