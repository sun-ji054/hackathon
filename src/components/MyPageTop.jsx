import React from "react";
import styled from "styled-components";
import image from "../assets/icons/Image.png";
import arrow_org from "../assets/icons/Arrow_org.png";

const TopStyle = styled.div`
  display: flex;
  width: 380px;
  background-color: white;
  border: 1px solid #CFCFCF;
  border-bottom: none;
  border-radius: 20px 20px 0 0;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0 25px 25px;
`
const Id = styled.p`
  font-size: 20px;
  font-weight: 700;
`
const Logout = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 12px 3px 0 80px;
  cursor: pointer;
`

function MyPageTop(){
  return(
    <TopStyle>
      <Profile>
        <img src={image} alt="프로필"></img>
        <div style={{marginLeft: '10px'}}>
          <Id>honggil123</Id>
          <p style={{WebkitTextFillColor:'#969597'}}>일반 계정</p>
        </div>
      </Profile>
      <Logout>
        <p style={{fontSize:'14px', WebkitTextFillColor: '#8B6A55',marginRight:'8px'}}>로그아웃</p>
        <img src={arrow_org} alt="버튼"></img>
      </Logout>
    </TopStyle>
  );
}

export default MyPageTop;