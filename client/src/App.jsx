import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import AppLayout from "./components/AppLayout.jsx";
import AdminLayout from "./components/admin/AdminLayout.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminAddBlog from "./pages/admin/AdminAddBlog.jsx";
import AdminBlogList from "./pages/admin/AdminBlogList.jsx";
import AdminComment from "./pages/admin/AdminComment.jsx";
import "quill/dist/quill.snow.css";
import {Toaster} from "react-hot-toast";
import {AppProvider} from "./context/AppContext.jsx";


export const router = createBrowserRouter([
    {
        path: `/`,
        element: <AppLayout />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: `/blog/:id`,
                Component: Blog,
            },
        ]
    },
    {
        path: `/admin`,
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                Component: AdminDashboard
            },
            {
                path: `add`,
                Component: AdminAddBlog
            },
            {
                path: `list`,
                Component: AdminBlogList
            },
            {
                path: `comment`,
                Component: AdminComment
            },
        ]
    }
]);


function App() {
    return (
        <AppProvider>
            <Toaster />
            <RouterProvider router={router} />
        </AppProvider>
    );
}

export default App;