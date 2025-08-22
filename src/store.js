import { create } from 'zustand';

export const useLocationStore = create((set) => ({
  location: '',
  setLocation: (location) => set({location})
}))


