import { create } from 'zustand';

const useInfoStore = create((set) => ({
  email: '',
  password: '',
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}))

export default useInfoStore;
