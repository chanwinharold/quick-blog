import {useEffect, useState} from "react";
import Moment from "moment";
import {CheckCircle, Trash2} from "lucide-react";
import {useAppContext} from "../../context/AppContext.jsx";
import toast from "react-hot-toast";


function AdminComment() {
    const [Filter, setFilter] = useState("Not Approved");
    const {axios, Comments, setComments, fetchComments} = useAppContext();

    const approveComment = async (id) => {
        try {
            const {data} = await axios.put(`/api/admin/comments`, {id})
            if (data.success) {
                const res = await fetchComments();
                setComments(res);
                return toast.success(data.message)
            } else return toast.error(data.message);
        } catch (err) {
            return toast.error(err.message);
        }
    }
    const deleteComment = async (id) => {
        try {
            const confirm = window.confirm(`Are you sure you want to delete this comment ?`);
            if (!confirm) return
            const {data} = await axios.delete(`/api/admin/comments/${id}`)
            if (data.success) {
                const res = await fetchComments();
                setComments(res);
                return toast.success(data.message);
            } else return toast.error(data.message);
        } catch (err) {
            return toast.error(err.message);
        }
    }
    const handleFilter = () => {
        setFilter(prevState => {
            if (prevState==="Approved") {
                return "Not Approved";
            }
            return "Approved";
        })
    }

    useEffect(() => {
        fetchComments().then(res => {
            setComments(res)
        }).catch(err => {
            toast.error(err.message);
        })
    }, []);


    return (
        <section className={`py-12 px-6 w-full flex-1`}>
            <div className={`mb-6 max-w-4xl flex justify-between`}>
                <strong className={`font-semibold text-lg text-primary-dark`}>Comments</strong>
                {Filter==="Not Approved" ?
                    <button onClick={handleFilter} type={`button`} className={`cursor-pointer flex items-center gap-2 bg-primary-light/25 border-primary-light/50 border w-fit rounded-full px-5 py-1 text-sm`}>
                        <p className={`text-primary-light font-medium`}>Approved</p>
                    </button> :
                    <button onClick={handleFilter} type={`button`} className={`cursor-pointer flex items-center gap-2 bg-bg border-primary-light/50 border w-fit rounded-full px-5 py-1 text-sm`}>
                        <p className={`text-primary-light font-medium`}>Not Approved</p>
                    </button>
                }
            </div>
            <div className={`h-86 max-w-4xl scrollbar-none overflow-auto rounded-lg`}>
                <table className={`w-full bg-surface rounded-lg text-sm shadow`}>
                    <thead>
                    <tr>
                        <th scope={`col`} className={`px-4 py-4 text-start uppercase font-semibold`}>Blog Title & Comment {Filter==="Approved" ? <span className={`text-success`}>Approved</span> : <span className={`text-error`}>Not Approved</span>}</th>
                        <th scope={`col`} className={`px-4 py-4 text-start uppercase font-semibold`}>Date</th>
                        <th scope={`col`} className={`px-4 py-4 text-start uppercase font-semibold`}>Actions</th>
                    </tr>
                    </thead>
                    <tbody className={``}>
                    {
                        (Comments.filter(comment => {
                            if (Filter==="Approved") return comment.isApproved;
                            return !comment.isApproved
                        })).map(item => (
                            <tr key={item._id} className={`border-y border-y-border relative`}>
                                <td className={`grid max-w-115 px-4 py-4`}>
                                    <span className={`mb-4`}><b>Blog: </b>{item.blog.title}</span>
                                    <span><b>Name: </b>{item.name}</span>
                                    <span><b>Comment: </b>{item.content}</span>
                                </td>
                                <td className={`px-4 top-0`}>
                                    {Moment(item.createdAt).format(`Do MMM, YYYY`)}
                                </td>
                                <td className={`flex gap-3 px-4 py-4`}>
                                    {
                                        Filter===`Not Approved` ?
                                            <button className={`cursor-pointer`} onClick={() => approveComment(item._id)} type="button"><CheckCircle className={`stroke-success stroke-3`}/></button>
                                            :<button type={`button`} className={`text-success after:content-["Approved"] font-medium flex items-center gap-2 transition-colors bg-success/10 hover:bg-success/25 border-success border w-fit rounded-full px-5 py-1 text-sm`}></button>
                                    }
                                    <button onClick={() => deleteComment(item._id)} className={`cursor-pointer`} type="button"><Trash2 className={`stroke-3`} /></button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default AdminComment;