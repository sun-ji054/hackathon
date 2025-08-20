import React from "react";
import HomeHeaderBar from "../components/HomeHeaderBar";
import { userInfoStore } from "../store/userInfoStore";
import MyPageOpt from "../components/MyPageOpt";
import MyPageUnder from "../components/MyPageUnder";
import MyPageTop from "../components/MyPageTop";
import MyPageTop2 from "../components/MyPageTop2";
import styled from "styled-components";

const Background = styled.div`
  background-color: #FCFAF7;
  width: 100%;
  height: 100%;
`
const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;

/**자간 넓음 */`
const Text = styled.p`
  margin-top: 40px;
  margin-left: 25px;
  font-size: 24px;
  font-weight: 600;
`
const Text2 =styled.p`
  margin-left: 25px;
  font-size: 16px;
  font-weight: medium;
`
function MyPage(){
// const {name} = useInfoStore();

  return(
    <Background>
      <HomeHeaderBar></HomeHeaderBar>
      <Text>홍길동님의 마이페이지</Text>
      <Text2>프로필을 수정할 수 있어요.</Text2>

      <SelectBox>
        <div style={{marginBottom:'20px'}}>
          <MyPageTop></MyPageTop>
          <MyPageUnder>
            <div style={{margin:'15px 0 15px 0'}}>
              <MyPageOpt text='프로필'></MyPageOpt>
              <MyPageOpt text='아이디/비밀번호 변경'></MyPageOpt>
              <MyPageOpt text='회원 탈퇴'></MyPageOpt>
            </div>
        </MyPageUnder>

        </div>

      <MyPageTop2></MyPageTop2>
      <MyPageUnder>
        <div style={{margin:'15px 0 15px 0'}}>
            <MyPageOpt text='알림'></MyPageOpt>
            <MyPageOpt text='문의하기'></MyPageOpt>
            <MyPageOpt text='사업자 계정 등록 안내'></MyPageOpt>
          </div>
      </MyPageUnder>
      </SelectBox>
    </Background>
  );
}

export default MyPage;

/**홍길동 자리에 {username} 넣기 */