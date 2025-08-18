import searchIcon from '../assets/icons/Search.png';

export default function SearchBar({ className = '' }) {
    return (
        <div className={`pl-4 w-[380px] ${className}`}>
            <div className="flex items-center border border-[#DCDCDC] rounded-[14px] overflow-hidden bg-white h-[51px]">
                {/* 인풋박스, api연결해야함 */}
                <input
                    type="text"
                    placeholder="가게나 쿠폰을 검색해보세요"
                    className="flex-1 px-4 text-sm text-gray-600 focus:outline-none"
                />
                {/* 버튼 */}
                <button className="bg-[#F35B1B] w-[51px] h-full flex items-center justify-center">
                    <img src={searchIcon} alt="검색" className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
