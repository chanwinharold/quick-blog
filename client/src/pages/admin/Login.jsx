import {useState} from "react";


function Login() {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(prevState => ({...prevState, [name]: value}))
    }

    return (
        <div className={`max-w-115 m-auto my-20 shadow-md shadow-neutral-500 p-6 rounded-md grid gap-16`}>
            <header className={`text-center grid gap-px pt-8`}>
                <h1 className={`text-4xl font-semibold`}><span className={`text-primary-light`}>Admin</span> Login</h1>
                <p className={`text-sm text-text-muted`}>Enter your credentials to access
                    the admin panel</p>
            </header>
            <form onSubmit={handleSubmit} className={`grid gap-8`}>
                <label className={`grid gap-2`}>
                    <span className={`font-medium`}>Email</span>
                    <input value={inputs.email} onChange={handleChange} placeholder={`your email`} className={`h-12 px-3 placeholder:text-text-muted outline-none border-b border-b-border focus:border-b-primary-dark`} type="email" name="email" id="email"/>
                </label>
                <label className={`grid gap-2`}>
                    <span className={`font-medium`}>Password</span>
                    <input value={inputs.password} onChange={handleChange} placeholder={`your password`} className={`h-12 px-3 placeholder:text-text-muted outline-none border-b border-b-border focus:border-b-primary-dark`} type="password" name="password" id="password"/>
                </label>
                <button className={`bg-primary-light/95 border-2 border-transparent hover:border-primary-light hover:bg-primary transition-colors duration-300 text-text-inverse rounded-sm h-12 cursor-pointer`} type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;