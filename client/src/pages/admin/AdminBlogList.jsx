import BlogTableItem from "../../components/admin/BlogTableItem.jsx";
import {useEffect, useState} from "react";
import {blogData} from "../../assets/assets.js";


function AdminBlogList() {
    const [Data, setData] = useState([])

    const handleFetch = async () => {
        try {
            return blogData
        } catch (e) {return e}
    }

    useEffect(() => {
        handleFetch().then(res => {
            setData(res)
        }).catch(error => {
            console.error(`Internal server error : ${error}`)
        })
    }, []);

    return (
        <section className={`py-12 px-6 w-full`}>
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
                        Data.map((item, i) => (
                            <BlogTableItem key={item.id} blog={item} index={i+1} />
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default AdminBlogList;