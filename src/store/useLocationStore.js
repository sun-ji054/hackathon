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
                    const response = await api.get('/api/locations/');
                    const data = response.data;

                    set({
                        locations: data,
                        provinceList: Object.keys(data),
                    });
                } catch (error) {
                    console.log('지역 데이터 가져오기 실패:', error.response?.data);
                }
            },

            selectProvince: (province) =>
                set((state) => {
                    const cityData = state.locations?.[province];
                    return {
                        province,
                        cityList: province ? Object.keys(cityData || {}) : [],
                        city: '',
                        districtList: [],
                        district: '',
                    };
                }),

            selectCity: (city) =>
                set((state) => {
                    const provinceData = state.locations?.[state.province];
                    return {
                        city,
                        districtList: provinceData?.[city] || [],
                        district: '',
                    };
                }),

            selectDistrict: (district) => set({ district }),
        }),
        {
            name: 'useLocationStorage',
            partialize: (state) => ({ district: state.district }),
        }
    )
);
