import BookIcon from '../assets/icons/Book.png';

export default function CouponbookHeaderBar() {
    return (
        <header className="flex items-center justify-end h-[56px] px-[20px] border-b border-[#E5E5EC] bg-white">
            <div className="flex items-center ">
                <img src={BookIcon} alt="내 쿠폰북" className="w-5 h-5" />
            </div>
        </header>
    );
}
