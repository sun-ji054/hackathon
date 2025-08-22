import React from 'react';
import styled from 'styled-components';

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
        props.$first &&
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
    &::-webkit-scrollbar {
        display: none;
    }
`;

function MapSort() {
    const handleWheel = (e) => {
        e.currentTarget.scrollBy({
            left: e.deltaY,
            behavior: 'smooth',
        });
    };

    /**
     * todo 데이터 불러와서 연결
     */
    return (
        <MapSortWrapper onWheel={handleWheel}>
            <MapSortStyle $first={true}>전체</MapSortStyle>
            <MapSortStyle>저장된 쿠폰</MapSortStyle>
            <MapSortStyle>카페</MapSortStyle>
            <MapSortStyle>브런치</MapSortStyle>
            <MapSortStyle>음식점</MapSortStyle>
            <MapSortStyle>현재 영업 중</MapSortStyle>
        </MapSortWrapper>
    );
}

export default MapSort;
