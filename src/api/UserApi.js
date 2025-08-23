import { api } from "./Api";
import { userInfoStore } from "../store/userInfoStore";

//User 정보 수정
export const updateProfile = async (updateData) => {
  try {
    const response = await api.put('/accounts/profile/', updateData);

    console.log("프로필 업데이트 성공:", response.data);

    // 응답값을 store에도 반영 (username, email 등이 있으면 갱신)
    userInfoStore.setState((state) => ({
      ...state,
      ...response.data,
    }));

    return response.data;
  } catch (error) {
    console.error("프로필 업데이트 실패:", error.response?.data || error.message);
    return null;
  }
};

//회원탈퇴
export const deactivate = async () => {
  const {password} = userInfoStore.getState();

  try{
    const response = await api.delete('accounts/deactivate', {
      data: { password }
    });

    console.log("회원 탈퇴 성공:", response.data);
    return response.data;
} catch(error) {
  console.error("회원 탈퇴 실패", error.response?.data || error.message);
  return null;
}
};

