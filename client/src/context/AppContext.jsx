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

    const fetchBlog = async () => {
        try {
            const {data} = await axios.get('/api/blog/all')
            data.success ? setBlogs(data.blogs) : toast.error(data.message)
        } catch (err) { toast.error(err.message) }
    }
    const value = {
        axios,
        navigate,
        token, setToken,
        blogs, setBlogs,
        inputs, setInputs
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