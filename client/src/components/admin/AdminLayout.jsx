import {useAppContext} from "../../context/AppContext.jsx";
import Login from "../../pages/admin/Login.jsx";
import Admin from "./Admin.jsx";


function AdminLayout() {
    const {token} = useAppContext();
    return token ? <Admin /> : <Login />
}

export default AdminLayout;