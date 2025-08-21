import mapIcon from '../assets/icons/Place.png';
import clockIcon from '../assets/icons/Time.png';
import phoneIcon from '../assets/icons/Call.png';

export default function StoreInfoCard({ className = '' }) {
    return (
        <div className={`bg-[#F2592A] flex items-center justify-center p-4 ${className}`}>
            <div className="bg-[#FCFAF7] rounded-2xl w-[362px] h-[191px] p-5 flex flex-col justify-between shadow-md">
                {/* 상단 */}
                <div className="flex justify-between items-center">
                    <h2 className="text-[18px] font-bold text-black ">매장 정보</h2>
                </div>

                {/* 내용 */}
                <div className="mt-1 space-y-1 text-gray-700 text-[15px]">
                    {/* 위치 */}
                    <div className="flex items-start gap-[10px]">
                        <img src={mapIcon} alt="map" className="w-5 h-5 mt-1" />
                        <div>
                            <p className="font-semibold text-[#8B6A55] ">위치</p>
                            <p className="text-[#595959] text-sm ">서울 동대문구 망우로 40 지하1층</p>
                        </div>
                    </div>

                    {/* 영업시간 */}
                    <div className="flex items-start gap-[10px]">
                        <img src={clockIcon} alt="clock" className="w-5 h-5 mt-1" />
                        <div>
                            <p className="font-semibold text-[#8B6A55] mt-0 leading-5">영업시간</p>
                            <p className="text-[#595959] text-sm">13:00 - 24:00 / 23:00 라스트오더</p>
                        </div>
                    </div>

                    {/* 연락처 */}
                    <div className="flex items-start gap-[10px]">
                        <img src={phoneIcon} alt="phone" className="w-5 h-5 mt-1" />
                        <div>
                            <p className="font-semibold text-[#8B6A55] mt-0 leading-5">연락처</p>
                            <p className="text-[#595959] text-sm">0507-1383-0852</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
