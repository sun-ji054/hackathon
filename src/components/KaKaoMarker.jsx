import React, { useEffect } from 'react';

function KakaoMarker({ map, store, isActive, onClick }) {
    useEffect(() => {
        if (!map || !window.kakao) return;

        const el = document.createElement('div');
        el.style.cssText = `
      display:flex;
      align-items:center;
      justify-content:center;
      background-color:#F2592A;
      color:white;
      font-size:12px;
      font-weight:600;
      padding:8px 12px;
      border-radius:16px;
      cursor:pointer;
      transition: transform 0.2s;
    `;
        el.innerText = store.name;

        // active 스타일 적용
        const setActiveStyle = (active) => {
            if (active) {
                el.style.backgroundColor = 'white';
                el.style.color = '#F2592A';
                el.style.border = '2px solid #F2592A';
            } else {
                el.style.backgroundColor = '#F2592A';
                el.style.color = 'white';
                el.style.border = 'none';
            }
        };

        setActiveStyle(isActive); // 처음 렌더링 시 적용

        el.addEventListener('click', () => {
            if (onClick) onClick(store);
        });

        const overlay = new window.kakao.maps.CustomOverlay({
            position: new window.kakao.maps.LatLng(store.position.lat, store.position.lng),
            yAnchor: 1,
            content: el,
            map,
        });

        // isActive가 바뀔 때마다 스타일 업데이트
        setActiveStyle(isActive);

        return () => overlay.setMap(null);
    }, [map, store, isActive, onClick]);

    return null;
}

export default KakaoMarker;
