import {assets} from "../assets/assets.js";
import {Link, useNavigate} from "react-router";


function Footer() {
    const navigate = useNavigate();

    return (
        <footer className={`px-8 sm:px-16 xl:px-24 pt-12 bg-surface`}>
            <div className={`w-full flex justify-between gap-8 place-content-between`}>
                <section className={`basis-2/5 grid gap-4`}>
                    <div onClick={() => navigate("/")} className={`flex gap-3 items-center`}>
                        <img src={`${assets.logo}`} alt="logo" className={`w-6 sm:w-10`}/>
                        <span className={`text-2xl font-medium`}>Quick blog</span>
                    </div>
                    <p className={`text-text-muted text-sm hover:text-text/90`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Assumenda commodi cumque dignissimos ea, ex facere fugit
                        id laudantium minima nostrum optio praesentium quos rerum
                        saepe sequi similique ut? Fugiat, sapiente.</p>
                </section>
                <section className={`grid gap-2 place-content-start`}>
                    <em className={`font-semibold not-italic`}>Quick Links</em>
                    <Link className={`text-text-muted text-sm hover:text-text/90`} to={"#"}>Home</Link>
                    <Link className={`text-text-muted text-sm hover:text-text/90`} to={"#"}>Best sellers</Link>
                    <Link className={`text-text-muted text-sm hover:text-text/90`} to={"#"}>Offer & Deals</Link>
                    <Link className={`text-text-muted text-sm hover:text-text/90`} to={"#"}>FAQs</Link>
                </section>
                <section className={`grid gap-2 place-content-start`}>
                    <em className={`font-semibold not-italic`}>Need help ?</em>
                    <Link className={`text-text-muted text-sm hover:text-text/90`} to={"#"}>Delivery Informations</Link>
                    <Link className={`text-text-muted text-sm hover:text-text/90`} to={"#"}>Return & Refund Policy</Link>
                    <Link className={`text-text-muted text-sm hover:text-text/90`} to={"#"}>Payment Methods</Link>
                    <Link className={`text-text-muted text-sm hover:text-text/90`} to={"#"}>Track your Order</Link>
                    <Link className={`text-text-muted text-sm hover:text-text/90`} to={"#"}>Contact Us</Link>
                </section>
                <section className={`grid gap-2 place-content-start`}>
                    <em className={`font-semibold not-italic`}>Follow Us</em>
                    <Link className={`text-text-muted text-sm hover:text-text/90`} to={"#"}>Instagram</Link>
                    <Link className={`text-text-muted text-sm hover:text-text/90`} to={"#"}>Twitter</Link>
                    <Link className={`text-text-muted text-sm hover:text-text/90`} to={"#"}>Facebook</Link>
                    <Link className={`text-text-muted text-sm hover:text-text/90`} to={"#"}>YouTube</Link>
                </section>
            </div>
            <hr className={`text-border mt-8`} />
            <p className={`text-center text-text-muted text-sm py-4`}>Copyright 2025 © Quick Blog @chanwinharold - All Right Reserved.</p>
        </footer>
    );
}

export default Footer;