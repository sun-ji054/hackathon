import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const userInfoStore = create(
  persist(
    (set) => ({
      id: null,
      // identifier: '',
      username: '',
      email: '',
      password: '',
      phone: '',
      agree: false,

      // setIdentifier: (identifier) => set({ identifier }),
      setUsername: (username) => set({ username }),
      setEmail: (email) => set({ email }),
      setPassword: (password) => set({ password }),
      setPhone: (phone) => set({ phone }),
      setAgree: () => set((state) => ({ agree: !state.agree })),

      setUserInfo: ({ id, username, email }) =>
        set({ id, username, email })
    }),
    {
      name: 'userInfoStorage',
      partialize: (state) => ({ username: state.username })
    }
  )
);
