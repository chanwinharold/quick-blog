import {Outlet} from "react-router";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";


function AdminLayout() {
    return (
        <>
            <Navbar />
            <div className={`flex gap-4`}>
                <Sidebar />
                <Outlet />
            </div>
        </>
    );
}

export default AdminLayout;