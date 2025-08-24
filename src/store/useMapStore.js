import { create } from "zustand";

export const useMapStore = create((set) => ({
  selectedStore: null,
  setSelectedStore: (store) => set({ selectedStore: store }),
  clearSelectedStore: () => set({ selectedStore: null })
}))