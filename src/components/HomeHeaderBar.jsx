import BellIcon from '../assets/icons/Bell.png';
import Logo from '../assets/icons/homeLogo.png';

export default function HomeHeaderBar() {
    return (
        <header className="flex items-center justify-center h-[56px] px-[20px] border-b border-[#E5E5EC] bg-white">
            <div className="flex items-center ">
                <img src={Logo} alt="홈로고" />
            </div>
        </header>
    );
}
