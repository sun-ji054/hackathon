import React from 'react';

const CouponCard = () => {
    return (
        <div className="w-[240px] h-[348px] bg-white rounded-[20px] shadow-md overflow-hidden relative flex flex-col">
            {/* 오른쪽 상단 버튼 */}
            <button className="absolute top-4 right-4 border border-[#F2592A] font-bold text-[#F2592A] text-[12px] rounded-full px-2 py-1 bg-white">
                스탬프 찍기
            </button>

            {/* 가게 이름/설명: 데이터 받아와야 함 */}
            <div className="p-4 flex-1 flex flex-col justify-end ">
                <h2 className="font-bold text-lg">한시십일분</h2>
                <p className="text-[#8B6A55] text-sm">음료 10잔 마시면 1잔 무료</p>

                {/* 진행 바: 스탬프 개수 데이터 받아야 함 */}
                <div className="mt-[1px] flex items-center justify-center gap-[11px]">
                    <div className="w-[168px] h-[6px] bg-[#D7D7D7] rounded-full">
                        <div className="w-[90%] h-[6px] bg-[#F2592A] rounded-full"></div>
                    </div>

                    <p className="text-[#F2592A] text-[12px] mt-1 text-right">9/10</p>
                </div>

                {/* 만료일: 데이터 받아와야 함 */}
                <p className="text-[#8B6A55] text-[10px] leading-[14px] tracking-[0px] mt-2 text-right">
                    9개월 후 만료
                </p>
            </div>
        </div>
    );
};

export default CouponCard;
