import {api} from './Api';
import {userInfoStore} from '../store/userInfoStore';

//회원가입
export const signUp = async () => {
  const {username, email, password, phone, province, city, district} = userInfoStore.getState();

  try {
    const response = await api.post("/accounts/auth/register/customer/", {
      username,
      email,
      password,
      phone,
      province,
      city,
      district
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

//로그인
export const login = async () => {
  const {identifier, password} = userInfoStore.getState();

  try {
    const response = await api.post("/accounts/auth/login", {
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