import React, {useState} from "react";
import MyPageBG from "../components/MyPageBG";
import BacktoMyPage from "../components/BacktoMyPage";
import MyPageTitle from "../components/MyPageTitle";
import MyPageSubtitle from "../components/MyPageSubTitle";
import MyPageInput from "../components/MyPageInput";
import MyPageSubmit from "../components/MyPageSubmit";
import styled from "styled-components";
import {userInfoStore} from "../store/userInfoStore";
import { deactivate } from "../api/UserApi";

const Warning = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: auto;
  background-color: #EADDD5;
  border-radius: 8px;
  padding: 15px 10px;
`
const Text = styled.p`
  font-size: 12px;
  font-weight: 300;
  -webkit-text-fill-color: #8B6A55;
`

function DeactivePage() {
  const {password, setPassword} = userInfoStore();
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      alert("회원 탈퇴 동의에 체크해주세요.");
      return;
    }

    const res = await deactivate();
    if (res) {
      alert("회원 탈퇴가 완료되었습니다.");
      localStorage.clear();
      window.location.href='/home';
    }
  }

  return(
    <MyPageBG>
      <BacktoMyPage />
      <MyPageTitle title='회원 탈퇴' />
      <form
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        onSubmit={handleSubmit}>
        <Warning>
        <Text>회원 탈퇴 시, 모든 데이터가 삭제되며 복구할 수 없습니다.<br/>
           신중하게 결정해주세요.
        </Text>
        </Warning>
        <MyPageSubtitle subtitle="비밀번호 확인" />
        <MyPageInput
            inputType="password"
            placeholder="현재 비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <label style={{ fontSize: "12px", marginTop: "15px" }}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            style={{ marginRight: "6px" }}
          />
          위 내용을 확인했으며, 회원 탈퇴에 동의합니다.
        </label>

        <MyPageSubmit submitName="탈퇴하기" />
      </form>
    </MyPageBG>
  );
}

export default DeactivePage;