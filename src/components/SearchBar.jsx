import { useState, useEffect } from 'react';
import searchIcon from '../assets/icons/Search.png';
import { useCouponStore } from '../store/useCouponStore';
import { useNavigate } from 'react-router-dom'; // ✅ useNavigate 추가

export default function SearchBar({ className = '' }) {
    const navigate = useNavigate(); // ✅ useNavigate 훅 선언
    const [keyword, setKeyword] = useState('');
    const [selectedKeyword, setSelectedKeyword] = useState(''); // 마지막 선택 값
    const [showDropdown, setShowDropdown] = useState(false);
    const fetchCoupons = useCouponStore((state) => state.fetchCoupons);
    const coupons = useCouponStore((state) => state.coupons);

    // 디바운스 자동완성 검색
    useEffect(() => {
        if (!keyword.trim() || keyword === selectedKeyword) {
            setShowDropdown(false);
            return;
        }

        const timer = setTimeout(() => {
            fetchCoupons({ name: keyword }, false); // 로딩 없이 자동완성
            setShowDropdown(true);
        }, 300);

        return () => clearTimeout(timer);
    }, [keyword, selectedKeyword, fetchCoupons]);

    // ✅ 드롭다운에서 아이템 클릭 시
    const handleSelect = (couponId) => {
        const selectedCoupon = coupons.find((coupon) => coupon.id === couponId);
        if (selectedCoupon) {
            setKeyword(selectedCoupon.place.name); // 검색창에 값 넣기
            setSelectedKeyword(selectedCoupon.place.name); // 마지막 선택값 저장
            setShowDropdown(false); // 드롭다운 닫기

            // ✅ 네비게이트 실행
            navigate(`/coupondetails?couponId=${couponId}`);
        }
    };

    // ✅ 돋보기 클릭 시 검색
    const handleSearch = () => {
        if (!keyword.trim()) return;
        const foundCoupon = coupons.find((coupon) => coupon.place.name === keyword);
        if (foundCoupon) {
            setSelectedKeyword(keyword); // 선택값 갱신
            setShowDropdown(false); // 드롭다운 닫기

            // ✅ 네비게이트 실행
            navigate(`/coupondetails?couponId=${foundCoupon.id}`);
        } else {
            // 일치하는 쿠폰이 없을 경우 처리
            // 예: alert('일치하는 쿠폰을 찾을 수 없습니다.');
        }
    };

    return (
        <div className={`mx-auto w-[380px] relative ${className}`}>
            <div className="flex items-center border border-[#DCDCDC] rounded-[14px] overflow-hidden bg-white h-[51px]">
                <input
                    type="text"
                    placeholder="가게나 쿠폰을 검색해보세요"
                    className="flex-1 px-4 text-sm text-gray-600 focus:outline-none"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button
                    className="bg-[#F35B1B] w-[51px] h-full flex items-center justify-center"
                    onClick={handleSearch} // 돋보기 클릭 이벤트
                >
                    <img src={searchIcon} alt="검색" className="w-5 h-5" />
                </button>
            </div>

            {/* 자동완성 드롭다운 */}
            {showDropdown && coupons.length > 0 && (
                <div className="absolute mt-2 w-full border border-gray-200 rounded-lg bg-white shadow-lg max-h-80 overflow-y-auto z-50">
                    {coupons.map((coupon) => (
                        <div
                            key={coupon.id}
                            className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100"
                            // ✅ 드롭다운 아이템 클릭 시 handleSelect 함수 호출
                            onClick={() => handleSelect(coupon.id)}
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
                </div>
            )}
        </div>
    );
}
