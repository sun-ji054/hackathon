import {api} from './Api';
import {userInfoStore} from '../store/userInfoStore';
import { useLocationStore } from '../store/useLocationStore';

//회원가입
export const signUp = async () => {
  const {username, email, password, phone} = userInfoStore.getState();
  const {province, city, district} = useLocationStore.getState();

  try {
    const response = await api.post("/accounts/auth/register/customer/", {
      username,
      email,
      password,
      phone,
      favorite_locations: [
        {
          province,
          city,
          district,
        }
      ]
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("회원가입 실패:", error.response?.data || error.message);
    return null;
  }
};

//로그인
export const login = async () => {
  const {identifier, password} = userInfoStore.getState();

  try {
    const response = await api.post("/accounts/auth/login/", {
      identifier,
      password
    });
    

    if (response.data && response.data.access) {
      localStorage.setItem('token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
    };

    console.log("로그인 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("로그인 실패:", error);
    return null;
  }
};