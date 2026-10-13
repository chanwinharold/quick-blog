import BlogTableItem from "../../components/admin/BlogTableItem.jsx";
import {useEffect} from "react";
import {useAppContext} from "../../context/AppContext.jsx";


function AdminBlogList() {
    const {blogs, fetchAdminBlog} = useAppContext();

    useEffect(() => {
        fetchAdminBlog();
    }, []);

    return (
        <section className={`py-12 px-6 w-full flex-1`}>
            <div className={`mb-6`}>
                <strong className={`font-semibold text-lg text-primary-dark`}>All Blogs</strong>
            </div>
            <div className={`h-86 max-w-4xl scrollbar-none overflow-auto`}>
                <table className={`w-full bg-surface rounded-lg text-sm shadow`}>
                    <thead>
                    <tr>
                        <th scope={`col`} className={`px-4 py-4 text-center uppercase font-semibold`}>#</th>
                        <th scope={`col`} className={`px-2 py-4 text-start uppercase font-semibold`}>Blog Title</th>
                        <th scope={`col`} className={`px-2 py-4 text-start uppercase font-semibold`}>Date</th>
                        <th scope={`col`} className={`px-2 py-4 text-start uppercase font-semibold`}>Status</th>
                        <th scope={`col`} className={`px-2 py-4 text-start uppercase font-semibold`}>Actions</th>
                    </tr>
                    </thead>
                    <tbody className={``}>
                    {
                        blogs && blogs.map((item, i) => (
                            <BlogTableItem key={item._id} blog={item} index={i+1} />
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default AdminBlogList;