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

// export const useMapStore = create(() => ({
//   container: document.getElementById('map'),
// 	options: {
// 		center: new kakao.maps.LatLng(33.450701, 126.570667),
// 		level: 3
// 	},

// 	map: new kakao.maps.Map(container, options)
// }))
