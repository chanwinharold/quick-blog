import {useEffect, useState} from "react";
import {blogComments} from "../../assets/assets.js";
import Moment from "moment";
import {CheckCircle, Trash2} from "lucide-react";


function AdminComment() {
    const [Comments, setComments] = useState([]);
    const [Filter, setFilter] = useState("Not Approved")

    const handleFetchComment = async () => {
        try {
            return blogComments
        } catch (e) {return e}
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
        handleFetchComment().then(res => {
            setComments(res)
        }).catch(err => {
            console.error(`Internal server error : ${err}`)
        })
    }, []);


    return (
        <section className={`py-12 px-6 w-full flex-1`}>
            <div className={`mb-6 flex justify-between`}>
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
                        <th scope={`col`} className={`px-4 py-4 text-start uppercase font-semibold`}>Blog Title & Comment</th>
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
                            <tr key={item.id} className={`border-y border-y-border relative`}>
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
                                            <button className={`cursor-pointer`} type="button"><CheckCircle className={`stroke-success stroke-3`} /></button>
                                            :<button type={`button`} className={`cursor-pointer flex items-center gap-2 bg-success/10 border-success border w-fit rounded-full px-5 py-1 text-sm`}><p className={`text-success font-medium`}>Approved</p></button>
                                    }
                                    <button className={`cursor-pointer`} type="button"><Trash2 className={`stroke-3`} /></button>
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