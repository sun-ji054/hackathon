import { create } from 'zustand';


export const userInfoStore = create((set) => ({
  id: null,
  identifier: '',
  username: '',
  email: '',
  password: '',
  phone: '',
  agree: false,

  setIdentifier: (identifier) => set({ identifier }),
  setUsername: (username) => set({ username }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setPhone: (phone) => set({ phone }),
  setAgree: () => set((state) => ({ agree: !state.agree })),

  setUserInfo: ({id,username, email}) =>
    set({id, username, email})
}))