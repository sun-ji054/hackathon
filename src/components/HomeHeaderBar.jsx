import BellIcon from '../assets/icons/Bell.png';
import SettingsIcon from '../assets/icons/Settings.png';

export default function HomeHeaderBar() {
    return (
        <header className="flex items-center justify-end h-[56px] px-[20px] border-b border-[#E5E5EC] bg-white">
            <div className="flex items-center gap-[10px]">
                <img src={BellIcon} alt="알림" className="w-5 h-5" />
                <img src={SettingsIcon} alt="설정" className="w-5 h-5" />
            </div>
        </header>
    );
}
