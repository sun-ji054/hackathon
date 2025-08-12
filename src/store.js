import { create } from 'zustand';

const useInfoStore = create((set) => ({
  name: '',
  email: '',
  password: '',
  phoneNum: '',
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setPhoneNum: (phoneNum) => set({ phoneNum })
}))

export default useInfoStore;
