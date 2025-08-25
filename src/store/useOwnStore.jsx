import { create } from "zustand";
import { persist } from "zustand/middleware";
import { api } from "../api/Api";

const initialOwn = {
  id: null,
  favorite_coupons: 0,
  coupon_counts: 0,
  stamp_counts: 0,
  user: null,
};

export const useOwnStore = create(
  persist(
    (set) => ({
      own: initialOwn,

      fetchOwn: async () => {
        try {
          const res = await api.get("/couponbook/own-couponbook/");
          set({ own: res.data }); // 응답 저장
        } catch (error) {
          console.error("own-couponbook 가져오기 실패:", error);
        }
      },
    }),
    {
      name: "own-storage",
      partialize: (state) => ({
        own: { id: state.own.id }, // id만 저장
      }),
    }
  )
);
