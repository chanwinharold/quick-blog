import {BookCheck, GalleryHorizontalEnd, MessagesSquare, NotebookPen} from "lucide-react";
import {useEffect} from "react";
import BlogTableItem from "../../components/admin/BlogTableItem.jsx";
import {useAppContext} from "../../context/AppContext.jsx";


function AdminDashboard() {
    const {DashboardData, fetchAdminDashboard} = useAppContext();

    useEffect(() => {
        fetchAdminDashboard();
    }, []);

    return (
        <main className={`flex-1 w-full p-8 grid gap-10 place-content-start`}>
            <section className={`flex gap-4 h-fit`}>
                <article className={`cursor-pointer hover:scale-105 duration-300 hover:shadow-sm bg-surface flex items-center gap-2 p-4 w-56 rounded-md`}>
                    <div className={`bg-primary-light/10 rounded-lg w-12 h-12 grid place-content-center`}><BookCheck className={`stroke-primary-light`} /></div>
                    <div className={`grid`}>
                        <span className={`text-xl font-semibold`}>{DashboardData.blogs}</span>
                        <span className={`text-sm text-text-muted`}>Blogs</span>
                    </div>
                </article>
                <article className={`cursor-pointer hover:scale-105 duration-300 hover:shadow-sm bg-surface flex items-center gap-2 p-4 w-56 rounded-md`}>
                    <div className={`bg-primary-light/10 rounded-lg w-12 h-12 grid place-content-center`}><MessagesSquare className={`fill-primary-light stroke-white/25`}/></div>
                    <div className={`grid`}>
                        <span className={`text-xl font-semibold`}>{DashboardData.comments}</span>
                        <span className={`text-sm text-text-muted`}>Comments</span>
                    </div>
                </article>
                <article className={`cursor-pointer hover:scale-105 duration-300 hover:shadow-sm bg-surface flex items-center gap-2 p-4 w-56 rounded-md`}>
                    <div className={`bg-primary-light/10 rounded-lg w-12 h-12 grid place-content-center`}><NotebookPen className={`stroke-primary-light`}/></div>
                    <div className={`grid`}>
                        <span className={`text-xl font-semibold`}>{DashboardData.draftBlogs}</span>
                        <span className={`text-sm text-text-muted`}>Drafts</span>
                    </div>
                </article>
            </section>
            <section className={`w-full`}>
                <div className={`flex gap-2 mb-6`}>
                    <GalleryHorizontalEnd />
                    <strong className={`font-semibold text-lg text-primary-dark`}>Latest Blogs</strong>
                </div>
                <div className={`w-full h-70 max-w-4xl scrollbar-none overflow-auto rounded-lg`}>
                    <table className={`max-w-4xl pb-10 w-full bg-surface rounded-lg text-sm shadow`}>
                        <thead>
                        <tr>
                            <th scope={`col`} className={`px-4 py-4 text-center uppercase font-semibold`}>#</th>
                            <th scope={`col`} className={`px-2 py-4 text-start uppercase font-semibold`}>Blog Title</th>
                            <th scope={`col`} className={`px-2 py-4 text-start uppercase font-semibold`}>Date</th>
                            <th scope={`col`} className={`px-2 py-4 text-start uppercase font-semibold`}>Status</th>
                            <th scope={`col`} className={`px-2 py-4 text-start uppercase font-semibold`}>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            DashboardData.recentsBlogs && DashboardData.recentsBlogs.map((item, i) => (
                                <BlogTableItem key={item._id} blog={item} index={i+1} />
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </section>

        </main>
    );
}

export default AdminDashboard;