import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import {Outlet} from "react-router";


function Admin() {
    return (
        <>
            <Navbar/>
            <div className={`flex gap-4`}>
                <Sidebar/>
                <Outlet/>
            </div>
        </>
    );
}

export default Admin;