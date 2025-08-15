import React from "react";
import {useInfoStore} from "../store";
import styled from "styled-components";

const ConsentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border: 1px solid black;
  margin: 0 24px 10px 24px;
`
const CheckStyle = styled.div`
  margin-left: 300px;
`

function SignUpConsent(){
  const {agree, setAgree} = useInfoStore();

  return(
    <>
      <p style={{marginLeft: "24px"}}>개인정보활용 동의서</p>
      <ConsentStyle>
        <p>1. 수집하는 개인정보 항목
문화체육관광부 대표 누리집의 이용자 참여와 이용통계 분석 등의 서비스를 위해 회원 가입시 아래의 개인정보를 수집하고 있습니다.

가. 필수정보: 아이디, 이름, 성별, 출생년도, 비밀번호, 이메일
나. 서비스 이용 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.
(접속로그, 접속IP정보, 쿠키, 방문 일시, 서비스 이용기록, 불량 이용 기록)
2. 대표 누리집에서 이용자 회원가입 시 직접 개인정보를 입력 및 수정하여 개인정보를 수집합니다.
3. 수집 개인정보의 이용목적
회원가입, 회원활동 실적 관리, 회원탈퇴 의사 확인 등 회원관리
제공되는 서비스 이용에 관한 인구통계학적 분석, 서비스 방문 및 이용기록 분석, 관심사에 기반한 맞춤형 서비스 등 제공
신규 서비스 개발 및 활성화, 홍보 및 이벤트, 전자우편 서비스 등 정보 전달
향후 법정 대리인 본인확인, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달 등</p>
      </ConsentStyle>
      <CheckStyle>
        <label>동의합니다</label>
      <input 
        type="checkbox"
        checked={agree}
        onChange={setAgree}>
      </input>
      </CheckStyle>
    </>
  );
}

export default SignUpConsent;