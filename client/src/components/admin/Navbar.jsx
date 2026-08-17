import {assets} from "../../assets/assets.js";
import {useNavigate} from "react-router";


function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {}

    return (
        <header className={`flex justify-between items-center py-5 px-8 shadow-xs shadow-neutral-200`}>
            <div onClick={() => navigate("/")} className={`cursor-pointer flex gap-3 items-center`}>
                <img src={`${assets.logo}`} alt="logo" className={`w-7 sm:w-8`}/>
                <span className={`text-lg sm:text-xl font-medium`}>Quick blog</span>
            </div>
            <button
                type={`button`}
                onClick={handleLogout}
                className={`flex items-center gap-3 rounded-full hover:bg-primary sm:px-5 sm:py-2.5 px-4 py-1 font-bold text-text-inverse cursor-pointer bg-primary-light transition-colors duration-300`}
            >
                Logout
            </button>
        </header>
    );
}

export default Navbar;