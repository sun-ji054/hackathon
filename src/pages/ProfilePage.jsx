import React from "react";
import styled from "styled-components";
import MyPageBG from "../components/MyPageBG";
import BacktoMyPage from "../components/BacktoMyPage";
import MyPageTitle from "../components/MyPageTitle";
import image from "../assets/icons/Image2.png";
import MyPageSubtitle from "../components/MyPageSubtitle";
import MyPageInput from "../components/MyPageInput";
import MyPageSubmit from "../components/MyPageSubmit";
import { userInfoStore } from "../store/userInfoStore";
import { updateProfile } from "../api/UserApi";

const ImgChange = styled.p`
  display: inline-block;
  width: fit-content;
  height: auto;
  border: 1px solid #8B6A55;
  border-radius: 116px;
  font-size: 12px;
  -webkit-text-fill-color: #8B6A55;
  padding: 5px 13px;
`

function ProfilePage(){
  const {username, setUsername} = userInfoStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateProfile({username});
    if (result) {
      alert("닉네임이 성공적으로 변경되었습니다!");
    }else {
      alert("닉네임 변경에 실패하였습니다.");
    }
  };

  return(
    <MyPageBG>
      <BacktoMyPage />
      <MyPageTitle title='프로필' />
      <div style={{display:'flex', flexDirection:'column',alignItems:'center', gap:'15px', marginBottom:'25px'}}>
        <img src={image} alt="프로필img" style={{width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%"}}/>
        <ImgChange>사진 변경하기</ImgChange>
      </div>
      <MyPageSubTitle subtitle='닉네임' />
      <form
        onSubmit={handleSubmit}
        style={{display:'flex', flexDirection:"column", alignItems:"center", gap:"18px"}}>
        <MyPageInput 
        inputType='text'
        placeholder="닉네임을 입력하세요"
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        <MyPageSubmit submitName={'저장하기'}/>
      </form>
    </MyPageBG>
  );
}

export default ProfilePage;