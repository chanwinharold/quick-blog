import { CloudUpload } from 'lucide-react';
import {useEffect, useRef, useState} from "react";
import {blogCategories, toolbarOptions} from "../../assets/assets.js";
import Quill from "quill";
import {useAppContext} from "../../context/AppContext.jsx";
import toast from "react-hot-toast";


function AdminAddBlog() {
    const [inputs, setInputs] = useState({
        image: false,
        title: "",
        subTitle: "",
        description: "",
        category: "Startup",
        isPublished: false
    })
    const [isLoading, setIsLoading] = useState(false);
    const {axios} = useAppContext();
    const editorRef = useRef(null);
    const quillRef = useRef(null);


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ?
            e.target.checked : e.target.type === "file" ?
                e.target.files[0] : e.target.value;

        setInputs(prevState => ({...prevState, [name]: value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const {image, ...blog} = inputs
            blog.description = quillRef.current.root.innerHTML;

            const formData = new FormData();
            formData.append('blog', JSON.stringify(blog));
            formData.append('image', image)

            const {data} = await axios.post(`/api/blog/add`, formData)
            if (data.success) {
                toast.success(data.message)
                setInputs({
                    image: false,
                    title: "",
                    subTitle: "",
                    description: "",
                    category: "Startup",
                    isPublished: false
                })
                quillRef.current.root.innerHTML = "";
            }
            else {
                return toast.error(data.message)
            }
        } catch (e) {
            return toast.error(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    const generateWithAI = () => {
        console.log(`Pending...`)
    }

    useEffect(() => {
        //  Initiate Quill
        if (!quillRef.current && editorRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                modules: {
                    toolbar: toolbarOptions
                },
                theme: `snow`,
            })
        }
    }, []);

    return (
        <form onSubmit={handleSubmit} className={`flex-1 max-w-200 w-full m-8 bg-surface rounded-lg`}>
            <div className={`w-full p-8 grid gap-3 place-content-start`}>

                {/* Image uploader */}
                <span className={`font-semibold text-text-muted`}>Upload thumbnail</span>
                <label htmlFor={`image`} className={`cursor-pointer inline-grid place-content-center place-items-center rounded-md overflow-hidden w-40 h-20 bg-bg`}>
                    {!inputs.image ?
                        <>
                            <CloudUpload className={`stroke-text-muted`}/>
                            <span className={`text-text-muted`}>Upload</span>
                        </>:
                        <img className={`w-40 h-20 object-center object-cover`} src={`${URL.createObjectURL(inputs.image)}`} alt=""/>}
                    <input className={`hidden`} onChange={handleChange} type="file" name="image" id="image" required/>
                </label>

                {/* Title entry */}
                <label htmlFor={`title`} className={`font-semibold text-text-muted grid gap-2`}>
                    <span className={`text-text-muted`}>Blog title</span>
                    <input value={inputs.title} onChange={handleChange} className={`font-light h-10 border border-border outline-none px-4 rounded-md min-w-sm`} type="text" name="title" id="title" placeholder={`Type here`} required/>
                </label>

                {/* Subtitle entry */}
                <label htmlFor={`subTitle`} className={`font-semibold text-text-muted grid gap-2`}>
                    <span className={`text-text-muted`}>Sub title</span>
                    <input value={inputs.subTitle} onChange={handleChange} className={`font-light h-10 border border-border outline-none px-4 rounded-md min-w-sm`} type="text" name="subTitle" id="subTitle" placeholder={`Type here`} required />
                </label>

                {/* Blog description */}
                <div className={`max-w-160 box-border font-semibold text-text-muted relative`}>
                    <span className={`text-text-muted inline-block mb-2`}>Blog description</span>
                    <div>
                        <div ref={editorRef}></div>
                    </div>
                    <button
                        className={`mt-2 btn-category w-fit rounded-sm px-4 py-2 bg-secondary hover:bg-secondary-light cursor-pointer`}
                        onClick={generateWithAI}
                        type="button"
                    >
                        Generate with AI
                    </button>
                </div>

                {/* Select menu categories */}
                <label htmlFor={`category`} className={`font-semibold text-text-muted grid gap-2`}>
                    <span className={`text-text-muted`}>Blog category</span>
                    <select onChange={handleChange} value={inputs.category} className={`font-light h-10 border border-border outline-none px-4 rounded-md min-w-sm`} name="category" id="category" required>
                        {blogCategories.slice(1, ).map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                </label>

                {/* Checkbox published */}
                <label className={`flex items-center gap-2`} htmlFor="isPublished">
                    <span className={`text-text-muted`}>Publish Now</span>
                    <input checked={inputs.isPublished} onChange={handleChange} type="checkbox" name="isPublished" id="isPublished"/>
                </label>

                <button disabled={isLoading} className={`justify-self-end my-12 btn-category disabled:opacity-10 disabled:cursor-default w-fit rounded-sm px-4 py-2 cursor-pointer`} type="submit">Submit</button>
            </div>
        </form>
    );
}

export default AdminAddBlog;