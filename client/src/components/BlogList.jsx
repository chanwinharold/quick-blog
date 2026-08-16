import {blogCategories} from "../assets/assets.js";
import {useState} from "react";


function BlogList() {
    const [menu, setMenu] = useState("All")

    return (
        <div>
            <div className={`flex justify-center gap-4 sm:gap-8 my-10 relative`}>
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
            </div>

            <div className={``}>
                {/*  ----- blog cards -----  */}
            </div>
        </div>
    );
}

export default BlogList;