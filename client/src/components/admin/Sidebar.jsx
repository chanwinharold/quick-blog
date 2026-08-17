import {NavLink} from "react-router";
import {BookCheck, HomeIcon, MessageCircleMore, SquarePlus} from "lucide-react";


function Sidebar() {
    return (
        <div className={`max-w-60 flex-1`}>
            <nav className={`min-h-screen h-full shadow-xs shadow-neutral-400`}>
                <NavLink to={`/admin`} end={true} className={({isActive}) => `sidebar-item ${isActive && `bg-primary-light/10 border-r-primary-light`}`}>
                    <HomeIcon />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to={`/admin/add`} className={({isActive}) => `sidebar-item ${isActive && `bg-primary-light/10 border-r-primary-light`}`}>
                    <SquarePlus />
                    <span>Add blogs</span>
                </NavLink>
                <NavLink to={`/admin/list`} className={({isActive}) => `sidebar-item ${isActive && `bg-primary-light/10 border-r-primary-light`}`}>
                    <BookCheck />
                    <span>Blogs list</span>
                </NavLink>
                <NavLink to={`/admin/comment`} className={({isActive}) => `sidebar-item ${isActive && `bg-primary-light/10 border-r-primary-light`}`}>
                    <MessageCircleMore />
                    <span>Comments</span>
                </NavLink>
            </nav>
        </div>
    );
}

export default Sidebar;