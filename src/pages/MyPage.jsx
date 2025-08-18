import React from "react";
import HomeHeaderBar from "../components/HomeHeaderBar";
import { useInfoStore } from "../store";
import MyPageOpt from "../components/MyPageOpt";
import MyPageUnder from "../components/MyPageUnder";
import MyPageTop from "../components/MyPageTop";

function MyPage(){
const {name} = useInfoStore();

  return(
    <div>
      <HomeHeaderBar></HomeHeaderBar>
      <p>홍길동님의 마이페이지</p>
      <p>프로필을 수정할 수 있어요.</p>
      <MyPageTop></MyPageTop>
      <MyPageUnder>
        <MyPageOpt></MyPageOpt>
        <MyPageOpt></MyPageOpt>
        <MyPageOpt></MyPageOpt>
      </MyPageUnder>
    </div>
  );
}

export default MyPage;

/**헤더 수정 봐야 함 */
/**홍길동 자리에 {username} 넣기 */