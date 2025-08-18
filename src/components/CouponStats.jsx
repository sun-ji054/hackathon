import lineImg from '../assets/icons/Line 36.png';

export default function CouponStats({ className = '' }) {
    return (
        <div
            className={`bg-white rounded-xl shadow-sm flex justify-between items-center mx-auto ${className}`}
            style={{ width: '360px', height: '90px' }}
        >
            {/* 즐겨찾기 */}
            <div className="flex-1 text-center relative">
                <p className="text-[#F2592A] font-bold text-2xl">3</p>
                <p className="text-[#8B6A55] text-[16px]">즐겨찾기</p>
                {/* 오른쪽 구분선 */}
                <img
                    src={lineImg}
                    alt="divider"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[60%]"
                />
            </div>

            {/* 저장한 쿠폰 */}
            <div className="flex-1 text-center relative">
                <p className="text-[#F2592A] font-bold text-2xl">27</p>
                <p className="text-[#8B6A55] text-[16px]">저장한 쿠폰</p>
                {/* 오른쪽 구분선 */}
                <img
                    src={lineImg}
                    alt="divider"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[60%]"
                />
            </div>

            {/* 스탬프 */}
            <div className="flex-1 text-center">
                <p className="text-[#F2592A] font-bold text-2xl">88</p>
                <p className="text-[#8B6A55] text-[16px]">스탬프</p>
            </div>
        </div>
    );
}
