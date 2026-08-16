import {assets} from "../assets/assets.js";
import { ArrowRight } from 'lucide-react';
import {useNavigate} from "react-router";



function Navbar() {
    const navigate = useNavigate();


    return (
        <header className={`flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer`}>
            <div onClick={() => navigate("/")} className={`flex gap-3 items-center`}>
                <img src={`${assets.logo}`} alt="logo" className={`w-6 sm:w-10`}/>
                <span className={`text-2xl font-medium`}>Quick blog</span>
            </div>
            <button type={`button`} onClick={() => navigate("/admin")} className={`flex items-center gap-3 rounded-full hover:bg-primary px-5 py-2.5 font-bold text-text-inverse cursor-pointer bg-primary-light transition-colors duration-300`}>
                Login
                <ArrowRight />
            </button>
        </header>
    );
}

export default Navbar;