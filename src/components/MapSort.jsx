import React, { useEffect } from 'react';
import { useCouponStore } from '../store/useCouponStore';
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

const TAGS = ['전체', '저장된 쿠폰', '카페', '브런치', '음식점', '현재 영업 중'];

function MapSort() {
    const { selectedTag, setSelectedTag, fetchCoupons } = useCouponStore();

    useEffect(() => {
        fetchCoupons();
    },[]);

    const handleWheel = (e) => {
        e.currentTarget.scrollBy({
            left: e.deltaY,
            behavior: 'smooth',
        });
    };

    return (
        <MapSortWrapper onWheel={handleWheel}>
            {TAGS.map((tag) => (
        <MapSortStyle
        key={tag}
        $first={selectedTag === tag}
        onClick={() => setSelectedTag(tag)}
        >
        {tag}
        </MapSortStyle>
    ))}
    </MapSortWrapper>
    );
}

export default MapSort;
