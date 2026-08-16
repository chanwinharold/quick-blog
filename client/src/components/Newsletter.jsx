

function Newsletter() {
    return (
        <section className={`relative mx-8 sm:mx-16 xl:mx-24 py-32 grid gap-8 place-items-center`}>
            <div className={`flex flex-col gap-4`}>
                <h2 className={`text-center text-2xl lg:text-3xl xl:text-5xl font-medium`}>
                    Never Miss a Blog!
                </h2>
                <p className={`text-center max-w-150 text-text-muted`}>Subscribe to get the latest blog, new tech,
                    and exclusive news</p>
            </div>
            <form className={`bg-surface rounded-md flex max-w-150 h-12 w-full`}>
                <input
                    className={`outline-none w-full px-6`}
                    type="email"
                    name="email-subscribe"
                    id="subscribe"
                    placeholder={`Enter your email`}
                    required
                />
                <button type="submit" className={`text-sm uppercase px-8 border-2 border-transparent hover:bg-primary-light/95 hover:border-primary-light bg-primary transition-colors duration-300 rounded-r-md text-text-inverse font-medium cursor-pointer`}>
                    subscribe
                </button>
            </form>
        </section>
    );
}

export default Newsletter;