import { useNavigate } from 'react-router-dom';

const CouponCard = ({ couponId, name, description, progress = 0, total = 1, expire, photo }) => {
    const navigate = useNavigate();
    const pct = total ? Math.min(100, Math.max(0, (Number(progress) / Number(total)) * 100)) : 0;

    const goDetails = () => {
        if (couponId) {
            navigate('/coupondetails', { state: { couponId } });
        } else {
            navigate('/coupondetails');
        }
    };

    const goStamp = (e) => {
        e.stopPropagation(); // 카드 클릭과 분리
        if (!couponId) return;
        navigate('/usecoupon', { state: { couponId } });
    };

    return (
        <div
            onClick={goDetails}
            className="w-full h-[348px] bg-white rounded-[20px] shadow-md overflow-hidden relative flex flex-col cursor-pointer"
            role="button"
            tabIndex={0}
        >
            {/* 배경 사진 */}
            {photo && <img src={photo} alt={name || 'coupon'} className="w-full h-[180px] object-cover" />}

            {/* 오른쪽 상단 버튼: id 없으면 숨김 */}
            {couponId && (
                <button
                    onClick={goStamp}
                    className="absolute top-4 right-4 border border-[#F2592A] font-bold text-[#F2592A] text-[12px] rounded-full px-2 py-1 bg-white"
                >
                    스탬프 찍기
                </button>
            )}

            {/* 텍스트 */}
            <div className="p-4 flex-1 flex flex-col justify-end">
                <h2 className="font-bold text-lg">{name}</h2>
                <p className="text-[#8B6A55] text-sm">{description}</p>

                {/* 진행 바 */}
                <div className="mt-[1px] flex items-center gap-[11px]">
                    <div className="w-[168px] h-[6px] bg-[#D7D7D7] rounded-full">
                        <div className="h-[6px] bg-[#F2592A] rounded-full" style={{ width: `${pct}%` }} />
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
