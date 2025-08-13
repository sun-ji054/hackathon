import { create } from 'zustand';

const useInfoStore = create((set) => ({
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

export default useInfoStore;
