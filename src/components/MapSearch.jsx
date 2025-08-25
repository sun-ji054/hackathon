import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useCouponStore } from "../store/useCouponStore";
import search from "../assets/icons/Search.png";
import { createPortal } from "react-dom";

const SearchFormStyle = styled.form`
  display: flex;
  background-color: white;
  width: 329px;
  height: 52px;
  align-items: center;
  border-radius: 25px;
  border: 2px solid #DCDCDC;
  box-shadow: 0 4px 8px 0 #00000040;
  position: relative;
`;

const SearchInputStyle = styled.input`
  display: inline-block;
  width: 263px;
  height: 39px;
  margin-left: 17px;
  outline: none;
  -webkit-text-fill-color: #8B6A55;
  font-size: 16px;
  font-weight: 400;
  z-index: 1;
`;

const SearchBtnStyle = styled.button`
  display: flex;
  background-color: #F2592A;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const DropdownStyle = styled.div`
  position: absolute;
  width: 329px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
  z-index: 9999; /* 🔥 최상단 */
`;

function MapSearch({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });

  const formRef = useRef(null);

  const fetchCoupons = useCouponStore((state) => state.fetchCoupons);
  const coupons = useCouponStore((state) => state.coupons);

  // ✅ 최초 전체 쿠폰 불러오기
  useEffect(() => {
    fetchCoupons({}, true);
  }, [fetchCoupons]);

  // ✅ 드롭다운 노출 여부
  useEffect(() => {
    if (!keyword.trim() || keyword === selectedKeyword) {
      setShowDropdown(false);
      return;
    }
    setShowDropdown(true);
  }, [keyword, selectedKeyword]);

  // ✅ 드롭다운 위치 계산 (Portal이라 필요함)
  useEffect(() => {
    if (formRef.current) {
      const rect = formRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [showDropdown, keyword]);

  const handleSelect = (name) => {
    setKeyword(name);
    setSelectedKeyword(name);
    setShowDropdown(false);

    const matchedCoupon = coupons.find((c) => c.place.name === name);
    if (matchedCoupon) {
      onSearch(
        { x: matchedCoupon.place.lng, y: matchedCoupon.place.lat },
        matchedCoupon
      );
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!window.kakao || !keyword.trim()) return;

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const place = data[0];
        const matchedCoupon = coupons.find(
          (c) => c.place.name === place.place_name
        );
        onSearch(place, matchedCoupon);
      } else {
        console.log("검색 결과가 없습니다.");
      }
    });
  };

  return (
    <>
      <SearchFormStyle id="mapSearch" ref={formRef} onSubmit={handleSearch}>
        <SearchInputStyle
          type="text"
          placeholder="가게를 검색해보세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <SearchBtnStyle type="submit" onClick={handleSearch}>
          <img src={search} alt="검색" />
        </SearchBtnStyle>
      </SearchFormStyle>

      {/* ✅ Portal로 body에 드롭다운 강제 렌더링 */}
      {showDropdown &&
        coupons.length > 0 &&
        createPortal(
          <DropdownStyle style={{ top: dropdownPos.top, left: dropdownPos.left, position: "absolute" }}>
            {coupons
              .filter((c) => c.place.name.includes(keyword))
              .slice(0, 5)
              .map((coupon) => (
                <div
                  key={coupon.id}
                  className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100"
                  onClick={() => handleSelect(coupon.place.name)}
                >
                  <img
                    src={coupon.place.image_url}
                    alt={coupon.place.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{coupon.place.name}</p>
                    <p className="text-xs text-gray-500">{coupon.place.address}</p>
                  </div>
                </div>
              ))}
          </DropdownStyle>,
          document.body
        )}
    </>
  );
}

export default MapSearch;
