import { useNavigate } from 'react-router-dom';

const CouponCard = ({ name, description, progress, total, expire, photo }) => {
    const percentage = (progress / total) * 100;
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate('/coupondetails')}
            className="w-full h-[348px] bg-white rounded-[20px] shadow-md overflow-hidden relative flex flex-col cursor-pointer"
        >
            {/* 배경 사진 */}
            {photo && <img src={photo} alt={name} className="w-full h-[180px] object-cover" />}

            {/* 오른쪽 상단 버튼 */}
            <button
                onClick={(e) => {
                    e.stopPropagation(); // 카드 클릭과 분리
                    navigate('/usecoupon');
                }}
                className="absolute top-4 right-4 border border-[#F2592A] font-bold text-[#F2592A] text-[12px] rounded-full px-2 py-1 bg-white"
            >
                스탬프 찍기
            </button>

            {/* 텍스트 */}
            <div className="p-4 flex-1 flex flex-col justify-end ">
                <h2 className="font-bold text-lg">{name}</h2>
                <p className="text-[#8B6A55] text-sm">{description}</p>

                {/* 진행 바 */}
                <div className="mt-[1px] flex items-center gap-[11px]">
                    <div className="w-[168px] h-[6px] bg-[#D7D7D7] rounded-full">
                        <div className="h-[6px] bg-[#F2592A] rounded-full" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <p className="text-[#F2592A] text-[12px] mt-1">
                        {progress}/{total}
                    </p>
                </div>

                {/* 만료일 */}
                <p className="text-[#8B6A55] text-[10px] mt-2 text-right">{expire}</p>
            </div>
        </div>
    );
};

export default CouponCard;
