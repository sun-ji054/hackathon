import { Star, Trash2, Check } from 'lucide-react';
import stampOrange from '../assets/icons/Stamp.png';
import stampGray from '../assets/icons/Empty.png';

export default function StampsCheck({ className = '' }) {
    const total = 10; // 총 스탬프 개수
    const used = 9; // 찍힌 스탬프 개수

    return (
        <div className="flex justify-center items-center bg-[#F2592A]">
            <div
                className={`relative bg-[#FCFAF7] rounded-3xl shadow-xl w-[320px] overflow-hidden mx-auto ${className}`}
            >
                {/* 가게 이미지 */}
                <div className="relative z-10 h-[450px]">
                    <img
                        src="https://picsum.photos/400/300"
                        alt="store"
                        className="w-full h-full object-cover rounded-3xl"
                    />

                    {/* 우상단 버튼 */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <button className="bg-white/90 rounded-full p-2 shadow border border-[#F2592A]">
                            <Star className="w-5 h-5 text-[#F2592A]" />
                        </button>
                        <button className="bg-white/90 rounded-full p-2 shadow border border-[#F2592A]">
                            <Trash2 className="w-5 h-5 text-[#F2592A]" />
                        </button>
                    </div>

                    {/* 가게명 + 설명 + 진행바 */}
                    <div className="absolute bottom-[30px] left-3 text-white">
                        <h2 className="px-3 font-bold text-[28px]">한시십일분</h2>
                        <p className="px-3 text-[16px] text-[#C5C5C5]">음료 10잔 마시면 1잔 무료</p>

                        <div className="pl-3 pt-1">
                            <div className="flex items-center justify-between">
                                <div className="w-full h-[6px] bg-gray-200 rounded-full mr-2">
                                    <div
                                        className="h-[6px] bg-[#F2592A] rounded-full"
                                        style={{ width: `${(used / total) * 100}%` }}
                                    />
                                </div>
                                <span className="text-xs text-[#F2592A]">
                                    {used}/{total}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 스탬프 리스트 (점선 박스) */}

                <div className="relative -mt-[14px] px-2 pb-2 z-0">
                    <div className="rounded-b-[20px] rounded-t-none border-2 border-dashed border-[#8B6A55] border-t-transparent p-5">
                        <div className="grid grid-cols-5 gap-3 pt-2">
                            {Array.from({ length: total }).map((_, i) => (
                                <div key={i} className="w-12 h-12 mx-auto">
                                    <img
                                        src={i < used ? stampOrange : stampGray}
                                        alt={`stamp ${i + 1}`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
