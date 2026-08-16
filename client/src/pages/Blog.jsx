import {useEffect, useState} from "react";
import {assets, blogData} from "../assets/assets.js";
import {useParams} from "react-router";
import Moment from "moment";


function Blog() {
    const {id} = useParams();
    const [Data, setData] = useState(null);

    const handleFetch = async () => {
        try {
            return blogData.find(item => item.id === parseInt(id))
        } catch (e) { return e }
    }

    useEffect(() => {
        handleFetch().then(res => {
            if (res) setData(res)
        }).catch(err => {
            console.error(`Internal server error : ${err}`)
        })
    }, []);

    return Data ? (
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
                <div dangerouslySetInnerHTML={{__html: Data.description}}></div>
            </section>
        </div>
    ) : <div className={`grid place-content-center place-items-center`}>Loading...</div>;
}

export default Blog;