import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";


const router = createBrowserRouter([
    {
        index: true,
        Component: Home
    },
    {
        path: "/blog",
        Component: Blog
    }
]);


function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;