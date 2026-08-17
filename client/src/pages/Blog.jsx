import {useEffect, useState} from "react";
import {assets, blogComments, blogData} from "../assets/assets.js";
import {useParams} from "react-router";
import Moment from "moment";
import {PacmanLoader} from "react-spinners"
import {User} from "lucide-react";
import {Facebook} from "../assets/icons/Facebook.jsx";
import {Twitter} from "../assets/icons/Twitter.jsx";
import {Google} from "../assets/icons/Google.jsx";


function Blog() {
    const {id} = useParams();
    const [Data, setData] = useState(null);
    const [Comment, setComment] = useState([]);
    const [inputs, setInputs] = useState({
        name: "",
        content: ""
    });

    const handleFetch = async () => {
        try {
            return blogData.find(item => item.id === parseInt(id))
        } catch (e) { return e }
    }
    const handleComment = async () => {
        try {
            return blogComments.filter(item => item.blog.id === parseInt(id))
        } catch (e) { return e }
    }
    const handleSubmitComment = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(prevState => ({...prevState, [name]: value}))
    }


    useEffect(() => {
        handleFetch().then(res => {
            if (res) setData(res)
        }).catch(err => {
            console.error(`Internal server error : ${err}`)
        })

        handleComment().then(res => {
            if (res.length) setComment(res)
        }).catch(err => {
            console.error(`Internal server error : ${err}`)
        })
    }, []);

    return Data && Comment ? (
        <div className={`py-16 px-6 sm:px-12`}>
            <img src={`${assets.bgGradient}`} alt="" className={`absolute opacity-50 -top-20 object-center object-cover -z-1`}/>
            <main>
                <div className={`max-w-150 m-auto flex flex-col gap-2 items-center pb-16`}>
                    <span className={``}>
                        Published on {Moment(Data.createdAt).format(`MMMM Do YYYY`)}
                    </span>
                    <h1 className={`text-center text-3xl lg:text-4xl xl:text-6xl font-semibold`}>{Data.title}</h1>
                    <p className={`text-center text-text-muted max-w-150`}>{Data.subTitle}</p>
                    <div className={`flex items-center gap-2 bg-primary-light/10 border-primary-light/50 border w-fit rounded-full px-5 py-1 text-sm`}>
                        <p className={`text-primary-light font-medium`}>Michael Brown</p>
                    </div>
                </div>
            </main>

            <section className={`max-w-200 m-auto`}>
                <img src={`${assets.bgCat}`} alt="" className={`rounded-lg mb-8`} />
                <div className={`prose`} dangerouslySetInnerHTML={{__html: Data.description}}></div>

                {/*  Comments section  */}
                <div className={`grid gap-8 py-16`}>
                    <h2 className={`font-semibold text-lg`}>Comments ({Comment.length})</h2>

                    <div className={`grid gap-3`}>
                        {
                            Comment.map(item => (
                                <article key={item.id} className={`max-w-150 bg-surface p-6 rounded-lg`}>
                                    <div className={`flex justify-between gap-12`}>
                                        <div className={`flex gap-3`}>
                                            <User className={`min-w-fit border-2 rounded-full`} />
                                            <div className={`grid gap-px -mt-0.5`}>
                                                <strong className={`text-lg font-medium`}>{item.name}</strong>
                                                <p className={`max-w-115 text-sm text-text-muted text-wrap`}>{item.content}</p>
                                            </div>
                                        </div>
                                        <div className={`self-end text-sm font-semibold text-text-muted text-nowrap`}>{Moment(item.createdAt).fromNow()}</div>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>

                {/*  Comment Box Editor  */}
                <div className={`grid gap-3`}>
                    <h2 className={`font-semibold text-lg`}>Add your comment</h2>
                    <form onSubmit={handleSubmitComment} className={`max-w-150 grid gap-4`}>
                        <input value={inputs.name} onChange={handleChange} className={`focus:outline-primary-light focus:outline-offset-1 focus:outline-3 h-10 placeholder:text-sm border rounded-sm px-4 border-border`} type="text" name={`name`} placeholder={`Name`}/>
                        <textarea value={inputs.content} onChange={handleChange} className={`focus:outline-primary-light focus:outline-offset-1 focus:outline-3 border placeholder:text-sm border-border rounded-sm p-4`} name={`content`} id="content" cols="50" rows="10" placeholder={`Comment`}></textarea>
                        <button className={`hover:bg-primary-light/95 cursor-pointer font-medium hover:border-primary-light bg-primary transition-colors duration-300 rounded-sm w-fit px-5 py-2 text-text-inverse`} type={`submit`}>Submit</button>
                    </form>
                </div>

                {/*  Social Media  */}
                <div className={`py-24`}>
                    <h2 className={`font-semibold text-lg`}>Share this on social media</h2>
                    <div className={`flex gap-4 py-4`}>
                        <a href={`https://facebook.com`} target={`_blank`} className={`inline-flex items-center justify-center w-10 h-10 shadow-sm shadow-primary-dark/50 rounded-full`}><Facebook className={`text-primary-light`} /></a>
                        <a href={`https://x.com`} target={`_blank`} className={`inline-flex items-center justify-center w-10 h-10 shadow-sm shadow-primary-dark/50 rounded-full`}><Twitter className={`text-primary-light`} /></a>
                        <a href={`https://google.com`} target={`_blank`} className={`inline-flex items-center justify-center w-10 h-10 shadow-sm shadow-primary-dark/50 rounded-full`}><Google className={`text-primary-light`} /></a>
                    </div>
                </div>
            </section>
        </div>

    ) : <div className={`min-h-screen grid place-content-center place-items-center`}><PacmanLoader color="#2e447f" /></div>;
}

export default Blog;