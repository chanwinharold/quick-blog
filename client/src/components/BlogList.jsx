import {blogCategories, blogData} from "../assets/assets.js";
import {useState} from "react";
import BlogCard from "./BlogCard.jsx";


function BlogList() {
    const [menu, setMenu] = useState("All")

    return (
        <div className={`mx-8 sm:mx-16 xl:mx-24 mb-20`}>
            <section className={`flex justify-center gap-4 sm:gap-8 my-10 relative`}>
                {
                    blogCategories.map(item => (
                        <div key={item} className={``}>
                            <button
                                onClick={() => setMenu(item)}
                                className={`${menu === item && `btn-category`} py-1 px-4 font-medium cursor-pointer border-2 border-transparent`}
                            >
                                {item}
                            </button>
                        </div>
                    ))
                }
            </section>

            <section className={`xl:grid xl:grid-cols-4 flex flex-wrap max-md:justify-center gap-6`}>
                {/*  ----- blog cards -----  */}
                {
                    blogData.filter(item =>
                        menu === 'All'
                            ? true
                            : item.category === menu
                    ).map(item => (
                        <BlogCard
                            key={item.id}
                            blog={item}
                        />
                    ))
                }
            </section>
        </div>
    );
}

export default BlogList;