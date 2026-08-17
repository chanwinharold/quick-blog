import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import AppLayout from "./components/AppLayout.jsx";


const router = createBrowserRouter([
    {
        path: `/`,
        element: <AppLayout />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/blog/:id",
                Component: Blog,
            },
        ]
    },
]);


function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;