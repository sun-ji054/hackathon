import { create } from 'zustand';

export const useLocationStore = create((set) => ({
  location: '',
  setLocation: (location) => set({location})
}))

// export const useMapStore = create((set) => ({
//   selectedStore: null,
//   setSelectedStore: (store) => set({ selectedStore: store }),
//   clearSelectedStore: () => set({ selectedStore: null })
// }))


