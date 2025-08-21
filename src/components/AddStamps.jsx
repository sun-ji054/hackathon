import stampOrange from '../assets/icons/Stamp.png';
import stampGray from '../assets/icons/Empty.png';

return function AddStamps({ className = '', total = 10, used = 0 }) {
    <div className="relative -mt-[14px] px-2 pb-2 z-0">
        <div className="rounded-b-[20px] rounded-t-none border-2 border-dashed border-[#8B6A55] border-t-transparent p-5 bg-[#FCFAF7]">
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
    </div>;
};
