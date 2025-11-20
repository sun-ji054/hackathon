import React from "react";
import InputBox from "./InputBox";
import InputSubmit from "./InputSubmit";
import { userInfoStore } from "../store/userInfoStore";
import { FormStyle2, FormNameStyle } from "./FormStyle";
import { useNavigate } from "react-router-dom"
import { login } from "../api/AuthApi";
import { api } from "../api/Api";
import { useLocationStore } from "../store/useLocationStore";
import LoadingOverlay from "./LoadingOverlay";

function LoginForm() {
  const { setUsername: setStoreUsername, setPassword: setStorePassword, setUserInfo } = userInfoStore();
  const { selectProvince, selectCity, selectDistrict } = useLocationStore();
  const navigate = useNavigate();

  const [localUsername, setLocalUsername] = React.useState("");
  const [localPassword, setLocalPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await login(localUsername, localPassword);
      if (response) {
        // Update store with credentials
        setStoreUsername(localUsername);
        setStorePassword(localPassword);

        // Fetch user info manually here since we removed it from API
        try {
          const meRes = await api.get('/accounts/auth/me/', {
            headers: { Authorization: `Bearer ${response.access}` },
          });
          const meData = meRes.data;

          setUserInfo({
            id: meData.id,
            username: meData.username,
            email: meData.email,
          });

          if (meData.favorite_locations && meData.favorite_locations.length > 0) {
            const favLocation = meData.favorite_locations[0];
            selectProvince(favLocation.province);
            selectCity(favLocation.city);
            selectDistrict(favLocation.district);
          }
        } catch (err) {
          console.error("Failed to fetch user info", err);
        }

        alert("로그인 성공");
        navigate("/home");
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      console.error(error);
      alert("로그인 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingOverlay />}
      <FormNameStyle>로그인</FormNameStyle>
      <FormStyle2 onSubmit={handleLogin}>
        <InputBox
          inputType={"text"}
          value={localUsername}
          placeholder={"아이디나 닉네임을 입력하세요"}
          onChange={(e) => setLocalUsername(e.target.value)}>
        </InputBox>
        <InputBox
          inputType={"password"}
          value={localPassword}
          placeholder={"비밀번호를 입력하세요"}
          onChange={(e) => setLocalPassword(e.target.value)}>
        </InputBox>
        <InputSubmit submitName={"로그인"} disabled={loading}></InputSubmit>
      </FormStyle2>
    </>
  );
}

export default LoginForm;