import Moment from "moment";
import {X} from "lucide-react";
import {useAppContext} from "../../context/AppContext.jsx";
import toast from "react-hot-toast";

function BlogTableItem({blog, index}) {
    const {_id, title, createdAt, isPublished} = blog;
    const {axios, fetchAdminBlog, fetchAdminDashboard} = useAppContext();

    const handlePublish = async () => {
        try {
            const {data} = await axios.put(`/api/blog/publish`, {id: _id});
            if (data.success) {
                toast.success(data.message);
                await fetchAdminBlog();
                await fetchAdminDashboard();
            }
            else toast.error(data.message);
        } catch (e) {
            toast.error(e.message);
        }
    }

    const handleDelete = async () => {
        try {
            const confirm = window.confirm(`Are you sure you want to delete this blog ?`)
            if (!confirm) return
            const {data} = await axios.delete(`/api/blog/${_id}`)
            if (data.success) {
                toast.success(data.message);
                await fetchAdminBlog();
                await fetchAdminDashboard();
            }
            else toast.error(data.message);
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <tr className={`border-y border-y-border`}>
            <th className={`px-4 py-4 text-center`}>{index}</th>
            <td className={`px-2 py-4 text-start`}>{title.slice(0, 30)}{title.length > 30 && `...`}</td>
            <td className={`px-2 py-4 text-start`}>{Moment(createdAt).format(`Do MMM, YYYY`)}</td>
            <td className={`${isPublished ? `text-success` : `text-error`} font-medium px-2 py-4`}>{isPublished ? `Published` : `Unpublished`}</td>
            <td className={`flex gap-3 px-2 py-4 text-start`}>
                <button onClick={handlePublish} className={`border border-primary rounded-sm cursor-pointer hover:border-accent hover:text-accent transition-colors duration-200 text-primary font-medium px-4 min-w-28 w-28 py-1.5`} type="button">{!isPublished ? `Published` : `Unpublished`}</button>
                <button onClick={handleDelete} className={`hover:bg-accent-light/25 hover:border hover:border-accent w-8 h-8 rounded-full hover:scale-110 duration-200 cursor-pointer bg-border inline-flex justify-center items-center`} type="button"><X width={12} height={12} className={`hover:text-accent`} /></button>
            </td>
        </tr>
    );
}

export default BlogTableItem;