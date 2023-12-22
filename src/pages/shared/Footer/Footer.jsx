import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-white bg-opacity-80 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <Link to='aboutUs' className="link link-hover">About us</Link>
                    <Link to="contact" className="link link-hover">Contact</Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a
                            href="https://www.facebook.com/ShahriaKibria"
                            className="font-bold text-4xl text-blue-700"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaFacebookSquare></FaFacebookSquare>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ShahriaKibria/"
                            className="font-bold text-4xl bg-sky-700 text-white"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a
                            href="https://github.com/SAJIB6260"
                            className="font-bold text-4xl"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub></FaGithub>
                        </a>

                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by ToDoList</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;