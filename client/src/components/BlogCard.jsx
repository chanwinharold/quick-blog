import {assets} from "../assets/assets.js";
import {useNavigate} from "react-router";


function BlogCard({blog}) {
    const {title, description, category, id} = blog
    const navigate = useNavigate()

    return (
        <article onClick={() => navigate(`/blog/${id}`)} className={`grid cursor-pointer hover:scale-102 duration-200 place-content-start max-w-72 rounded-lg overflow-hidden bg-surface shadow-md shadow-primary-dark/50`}>
            <img src={`${assets.bgCat}`} alt="" className={`object-cover object-center`}/>
            <div className={`p-6 grid gap-2`}>
                <span className={`px-4 py-1 w-fit text-sm font-medium bg-primary/50 rounded-full`}>{category}</span>
                <strong className={`text-primary-dark`}>{title}</strong>
                <p className={`text-text-muted`} dangerouslySetInnerHTML={{__html: `${description.slice(0, 75)}...`}}></p>
            </div>
        </article>
    );
}

export default BlogCard;