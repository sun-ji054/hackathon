import React, {useState} from "react";
import MyPageBG from "../components/MyPageBG";
import BacktoMyPage from "../components/BacktoMyPage";
import MyPageTitle from "../components/MyPageTitle";
import MyPageSubtitle from "../components/MyPageSubTitle";
import MyPageInput from "../components/MyPageInput";
import MyPageSubmit from "../components/MyPageSubmit";
import { userInfoStore } from "../store/userInfoStore";
import { updateProfile } from "../api/UserApi";

function MyPage_ID(){
  const {email, password, setEmail, setPassword} = userInfoStore();
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

      const updateData = {
      email: email,
      current_password: password,
      new_password1: newPassword1,
      new_password2: newPassword2,
    };

      const result = await updateProfile(updateData);
      if (result) {
        alert("정보가 성공적으로 변경되었습니다!");
      }else {
        alert("정보 변경에 실패하였습니다.");
      }
    };

  return(
    <MyPageBG>
      <BacktoMyPage />
      <MyPageTitle title='아이디 / 비밀번호 변경' />
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* 아이디 */}
        <MyPageSubtitle subtitle="아이디"/>
        <MyPageInput
          inputType="email"
          placeholder="아이디를 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* 현재 비밀번호 */}
        <MyPageSubtitle subtitle="현재 비밀번호" />
        <MyPageInput
          inputType="password"
          placeholder="현재 비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 새 비밀번호 */}
        <MyPageSubtitle subtitle="새 비밀번호" />
        <MyPageInput
          inputType="password"
          placeholder="새 비밀번호를 입력하세요"
          value={newPassword1}
          onChange={(e) => setNewPassword1(e.target.value)}
        />

        {/* 새 비밀번호 확인 */}
        <MyPageSubtitle subtitle="새 비밀번호 확인" />
        <MyPageInput
          inputType="password"
          placeholder="새 비밀번호를 다시 입력하세요"
          value={newPassword2}
          onChange={(e) => setNewPassword2(e.target.value)}
        />

        <MyPageSubmit submitName="변경하기" />
      </form>
    </MyPageBG>
  );
}

export default MyPage_ID;