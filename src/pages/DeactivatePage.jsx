import React from "react";
import MyPageBG from "../components/MyPageBG";
import BacktoMyPage from "../components/BacktoMyPage";
import MyPageTitle from "../components/MyPageTitle";
import MyPageSubtitle from "../components/MyPageSubTitle";
import MyPageInput from "../components/MyPageInput";
import MyPageSubmit from "../components/MyPageSubmit";
import styled from "styled-components";
import {userInfoStore} from "../store/userInfoStore";

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

  return(
    <MyPageBG>
      <BacktoMyPage />
      <MyPageTitle title='회원 탈퇴' />
      <form
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}      
      >
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
        <MyPageSubmit submitName="탈퇴하기" />
      </form>
    </MyPageBG>
  );
}

export default DeactivePage;