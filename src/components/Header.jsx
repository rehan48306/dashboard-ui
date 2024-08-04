import { EmailOutlined, NotificationsActive, Search, Settings } from "@mui/icons-material";
import profile from '../assets/profile.png'

const Header = () => {
    return (
        <header className="fixed top-0 left-16 right-0 bg-gray-800 z-10">
            <div className="flex justify-between h-20 items-center p-4 px-8 bg-gray-800">
                <div className="relative w-80">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-gray-700 rounded-lg text-white px-4 py-2 pl-10 focus:outline-none"
                    />
                    <Search className="absolute left-3 top-2 text-white" />
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <div className="p-2 bg-gray-700 rounded-full">
                            <EmailOutlined className="text-gray-400 hover:text-white transition-colors duration-200" />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="p-2 bg-gray-700 rounded-full">
                            <Settings className="text-gray-400 hover:text-white transition-colors duration-200" />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="p-2 bg-gray-700 rounded-full">
                            <NotificationsActive className="text-gray-400 hover:text-white transition-colors duration-200" />
                            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full ring-2 ring-gray-800 bg-blue-500"></span>
                        </div>
                    </div>
                    <div className="relative" style={{ marginLeft: '2rem' }}>
                        <img src={profile} className="h-10 w-10 rounded-full object-cover" alt="Profile" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;