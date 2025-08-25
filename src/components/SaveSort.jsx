import React, { useEffect } from "react";
import { useAllSavedStore } from "../store/useAllSavedStore";
import styled from "styled-components";

const MapSortStyle = styled.button`
  display: inline-block;
  height: 25px;
  border-radius: 20px;
  background-color: #ffffff;
  border-color: #8b6a55;
  border-width: 1px;
  padding: 2px 7px 3px 7px;
  font-size: small;
  -webkit-text-fill-color: #8b6a55;
  margin-right: 6px;

  ${(props) =>
    props.$active &&
    `
        background-color : #F2592A;
        border-color: #F2592A;
        -webkit-text-fill-color: #FFFFFF
    `}
`;

const MapSortWrapper = styled.div`
  width: 95%;
  z-index: 10;
  white-space: nowrap;
  overflow-x: auto;
  margin-bottom: 5px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TAGS = ["전체", "저장 날짜", "스탬프 개수", "만료됨"];

function SaveSort() {
  const { selectedTag, setSelectedTag, fetchAllSaved } = useAllSavedStore();

  useEffect(() => {
    fetchAllSaved(); // 첫 렌더링 시 전체 쿠폰
  }, [fetchAllSaved]);

  const handleClick = (tag) => {
    setSelectedTag(tag);

    if (tag === "전체") {
      fetchAllSaved();
    } else if (tag === "저장 날짜") {
      fetchAllSaved({ ordering: "saved_at" });
    } else if (tag === "스탬프 개수") {
      fetchAllSaved({ ordering: "stamp_counts" });
    } else if (tag === "만료됨") {
      fetchAllSaved({ is_expired: true });
    }
  };

  const handleWheel = (e) => {
    e.currentTarget.scrollBy({
      left: e.deltaY,
      behavior: "smooth",
    });
  };

  return (
    <MapSortWrapper onWheel={handleWheel}>
      {TAGS.map((tag) => (
        <MapSortStyle
          key={tag}
          $active={selectedTag === tag}
          onClick={() => handleClick(tag)}
        >
          {tag}
        </MapSortStyle>
      ))}
    </MapSortWrapper>
  );
}

export default SaveSort;
