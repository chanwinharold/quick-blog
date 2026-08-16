import Navbar from "./Navbar.jsx";
import {Outlet} from "react-router";
import Footer from "./Footer.jsx";


function AppLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default AppLayout;