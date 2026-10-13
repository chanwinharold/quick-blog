import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {router} from "../App.jsx";


axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const AppContext = createContext({});

export const AppProvider = ({children}) => {
    const navigate = router.navigate;
    const [token, setToken] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [inputs, setInputs] = useState("");
    const [Comments, setComments] = useState([]);
    const [DashboardData, setDashboardData] = useState({
        blogs: 0,
        comments: 0,
        draftBlogs: 0,
        recentsBlogs: []
    })

    const fetchBlog = async () => {
        try {
            const {data} = await axios.get('/api/blog/all')
            return data.success ? setBlogs(data.blogs) : toast.error(data.message)
        } catch (err) { return toast.error(err.message) }
    }
    const fetchAdminBlog = async () => {
        try {
            const {data} = await axios.get(`/api/admin/blogs`);
            if (data.success) return setBlogs(data.blogs)
            else {
                toast.error(data.message)
                return setBlogs([])
            }
        } catch (err) {return toast.error(err.message)}
    }
    const fetchAdminDashboard = async () => {
        try {
            const {data} = await axios.get(`/api/admin/dashboard`)
            if (data.success) return setDashboardData(data.dashboardData)
            else {
                toast.error(data.message)
                return setDashboardData({
                    blogs: 0,
                    comments: 0,
                    draftBlogs: 0,
                    recentsBlogs: []
                })
            }
        } catch (e) {return toast.error(e.message)}
    }
    const fetchComments = async () => {
        try {
            const {data} = await axios.get(`/api/admin/comments`)
            if (data.success) return data.comments
            else return data
        } catch (e) {return e}
    }

    const value = {
        axios,
        navigate,
        token, setToken,
        blogs, setBlogs,
        inputs, setInputs,
        DashboardData, setDashboardData,
        Comments, setComments,
        fetchBlog, fetchAdminBlog, fetchAdminDashboard, fetchComments
    }

    useEffect(() => {
        fetchBlog();
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            axios.defaults.headers.common["Authorization"] = `${storedToken}`
        }
    }, []);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);