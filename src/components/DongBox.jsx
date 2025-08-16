import React, { useState, useRef, useEffect } from "react";
import { useRegionStore } from "../store";
import RegionBox from "./RegionBox";
import styled from "styled-components";
import { Wrapper, DongShow, Dropdown, SelectedDong } from "./DongBoxStyle";
import arrow from "../assets/icons/Arrow.png";


function DongBox() {
  /**처음에 불러올 때는 '자주 가는 지역'의 '동'을 불러와야 하니까 쓰지만 사용자 맞춤 동도 필요할 듯 */
  /**아니면 사용자 맞춤 동이라는 변수 만들고 처음은 자주 가는 지역의 동과 똑같이 설정 -> 수정 */
  const { dong, setDong } = useRegionStore();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // 바깥 클릭 감지
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

   // 동 선택 시 실행될 함수
   /**이렇게 되면 '자주 가는 지역'에서 선택한 동이 바뀌어버림 */
  const handleSelectDong = (dongName) => {
    setDong(dongName); 
    setIsOpen(false);
  };

  return (
    <Wrapper ref={wrapperRef}>
      <SelectedDong onClick={() => setIsOpen(!isOpen)}>
        <DongShow>
        {dong || "동 선택"}
        </DongShow>
        <img src={arrow} alt="버튼"></img>
      </SelectedDong>

      {isOpen && (
        <Dropdown>
          <RegionBox 
            FormComponent="div" 
            SelectComponent="select" 
            onSelectDong={handleSelectDong} />
        </Dropdown>
      )}
    </Wrapper>
  );
}

export default DongBox;
