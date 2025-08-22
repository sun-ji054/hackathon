import searchIcon from '../assets/icons/Search.png';

export default function SearchBarNon({ className = '' }) {
    return (
        <div className={`w-full ${className}`}>
            <div className="flex items-center border border-[#DCDCDC] rounded-[14px] overflow-hidden bg-white h-[44px]">
                {/* 인풋박스 */}
                <input
                    type="text"
                    placeholder="예: 20257888273512345"
                    className="flex-1 px-4 text-sm text-gray-600 focus:outline-none"
                />
            </div>
        </div>
    );
}
