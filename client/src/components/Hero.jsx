import {assets} from "../assets/assets.js";
import {Star} from "lucide-react"


function Hero() {
    return (
        <div className={`relative mx-8 sm:mx-16 xl:mx-24 py-32 grid gap-8 place-items-center`}>
            <div className={`flex items-center gap-2 bg-primary-light/10 border-primary-light/50 border w-fit rounded-full px-4 py-2 text-sm`}>
                <p className={`text-primary-light text-shadow-primary-light text-shadow-sm`}>New: AI feature integrated</p>
                <Star className={`w-4 rotate-45 fill-primary-light stroke-primary`} />
            </div>
            <div className={`flex flex-col gap-4`}>
                <h1 className={`text-center text-3xl lg:text-4xl xl:text-6xl`}>
                    Your own
                    <span className={`text-primary-light text-shadow-md text-shadow-primary-light font-medium`}> blogging</span>
                    <br/> platform.
                </h1>
                <p className={`text-center max-w-150`}>This is your space to think out loud, to share what matters,
                    and to write without filters. Whether it's one word or a thousand,
                    your story starts right here.</p>
            </div>
            <form className={`bg-surface p-2 rounded-md flex max-w-100 h-14 w-full`}>
                <input
                    className={`outline-none w-full pl-2`}
                    type="text"
                    name="search-for-blog"
                    id="search"
                    placeholder={`Search for blogs`}
                    required
                />
                <button type="submit" className={`px-8 border-2 border-transparent hover:bg-primary-light/95 hover:border-primary-light bg-primary transition-colors duration-300 rounded-md text-text-inverse font-medium cursor-pointer`}>Search</button>
            </form>

            <img src={`${assets.bgGradient}`} alt="" className={`absolute opacity-50 -top-20 object-center object-cover -z-1`}/>
        </div>
    );
}

export default Hero;