import React, { useState, useRef, useEffect } from "react";
import { useLocationStore } from "../store/useLocationStore";
import RegionBox from "./RegionBox";
import { Wrapper, DongShow, Dropdown, SelectedDong } from "./DongBoxStyle";
import arrow from "../assets/icons/Arrow.png";


function DongBox() {
  const { district: globalDistrict} = useLocationStore();
  const [ customDistrict, setCustomDistrict ] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (globalDistrict) {
      setCustomDistrict(globalDistrict);
    }
  },[globalDistrict]);

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
  const handleSelectDong = (customDistrict) => {
    setCustomDistrict(customDistrict); 
    setIsOpen(false);
  };

  return (
    <Wrapper ref={wrapperRef}>
      <SelectedDong onClick={() => setIsOpen(!isOpen)}>
        <DongShow>
        {customDistrict || "동 선택"}
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
