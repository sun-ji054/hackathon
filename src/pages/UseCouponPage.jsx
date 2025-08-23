import HomeBottomNav from '../components/HomeBottomNav';

import Line from '../assets/icons/StampLine.png';
import SearchBarNon from '../components/SearchBarNon';
import CloseIcon from '../assets/icons/Close_LG.png';
import PreviousIcon from '../assets/icons/Arrow_Left_LG.png';

import { useNavigate, useLocation } from 'react-router-dom';
import registerStampsStore from '../store/registerStampsStore';

export default function UseCouponPage() {
    const navigate = useNavigate();
    const { state, search } = useLocation();

    // couponId는 아래 우선순위로 가져옴: location.state -> 쿼리파라미터 -> null
    const couponId =
        state?.couponId ??
        (() => {
            const p = new URLSearchParams(search);
            const v = p.get('couponId');
            return v ? Number(v) : null;
        })() ??
        null;

    const { registerStamp, loading } = registerStampsStore();

    const handleStamp = async () => {
        // SearchBarNon 내부 input 값을 DOM에서 그대로 읽음 (모양/컴포넌트 수정 X)
        const input =
            document.querySelector('#receipt-input input') ||
            document.querySelector('#receipt-input input[type="text"]');

        const receiptNumber = (input?.value || '').trim();

        if (!couponId) {
            alert('쿠폰 정보가 없습니다. 쿠폰 카드의 "스탬프 찍기" 버튼으로 들어와 주세요.');
            return;
        }
        if (!receiptNumber) {
            alert('영수증 거래번호를 입력해 주세요.');
            input?.focus();
            return;
        }

        const ok = await registerStamp(couponId, receiptNumber); // POST /couponbook/coupons/{couponId}/stamps/
        if (ok) {
            navigate('/stamps');
        }
    };

    return (
        <div className="flex flex-col h-screen bg-[#F2592A] text-white">
            <div className="flex justify-between items-center px-4 pt-4">
                <img
                    src={PreviousIcon}
                    alt="previous"
                    className="w-[20px] h-[20px] cursor-pointer"
                    onClick={() => navigate('/coupondetails')}
                />
                <img
                    src={CloseIcon}
                    alt="close"
                    className="w-[20px] h-[20px] cursor-pointer"
                    onClick={() => navigate('/couponbook')}
                />
            </div>

            {/* 상단 영역 */}
            <div className="px-5 pt-[67px]">
                <h1 className="text-[24px] font-bold leading-snug">스탬프 찍기!</h1>
                <p className="text-[16px] leading-snug">결제 정보를 연동해 스탬프를 찍어요.</p>
            </div>

            {/* 메인 영역 */}
            <main className="flex-1 overflow-y-auto px-4 py-4 ">
                <div className="bg-[#FFBCA8] rounded-2xl w-[350px] h-[230px] mx-auto mt-5 shadow-md p-5">
                    <h2 className="text-[20px] font-bold text-black">영수증 번호</h2>
                    <p className="text-[16px] leading-[15px] text-black">영수증의 거래번호를 입력하세요.</p>

                    {/* 모양/크기/위치 그대로 유지 */}
                    <div id="receipt-input">
                        <SearchBarNon className="pt-4" />
                    </div>

                    <div className="flex justify-end mt-[14px]">
                        <button
                            className="w-[140px] h-[44px] rounded-[10px] border-4 border-[#F2592A] bg-white text-[#F2592A] font-bold text-[17px] shadow-sm disabled:opacity-60"
                            onClick={handleStamp}
                            disabled={loading}
                        >
                            {loading ? '처리중...' : '스탬프 찍기'}
                        </button>
                    </div>
                </div>
            </main>

            {/* 하단바 */}
            <HomeBottomNav />
        </div>
    );
}
