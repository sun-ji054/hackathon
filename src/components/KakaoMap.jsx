import React, { useEffect, useRef, useState } from 'react';
import KaKaoStore from './KaKaoStore';
import { useMapStore } from '../store/useMapStore';
import { useCouponStore } from '../store/useCouponStore';
import KakaoMarker from './KakaoMarker';
import KakaoNowMarker from './KakaoNowMarker';

function KakaoMap({ center }) {
    const mapRef = useRef(null);
    const { selectedStore, setSelectedStore } = useMapStore();
    const { coupons } = useCouponStore();
    const [map, setMap] = useState(null);

    // Kakao map 로딩
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAOMAP_KEY}&autoload=false`;
        script.async = true;

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = mapRef.current;
                const options = {
                    center: new window.kakao.maps.LatLng(center.lat, center.lng),
                    level: 2,
                };
                const createdMap = new window.kakao.maps.Map(container, options);
                setMap(createdMap);
            });
        };

        document.head.appendChild(script);
    }, []);

    useEffect(() => {
        if (map) {
            const moveLatLng = new window.kakao.maps.LatLng(center.lat, center.lng);
            map.panTo(moveLatLng);
        }
    }, [center, map]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div ref={mapRef} style={{ width: '100%', height: '100%' }} />

            {/* 마커 렌더링 */}
            {map &&
                coupons.map((coupon) => {
                    if (!coupon.place?.lat || !coupon.place?.lng) return null;

                    const store = {
                        ...coupon,
                        id: coupon.id,
                        name: coupon.place.name,
                        position: {
                            lat: parseFloat(coupon.place.lat),
                            lng: parseFloat(coupon.place.lng),
                        },
                    };

                    return (
                        <KakaoMarker
                            key={store.id}
                            map={map}
                            store={store}
                            isActive={selectedStore?.id === store.id}
                            onClick={setSelectedStore}
                        />
                    );
                })}

            {map && <KakaoNowMarker map={map} />}

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <KaKaoStore />
            </div>
        </div>
    );
}

export default KakaoMap;
