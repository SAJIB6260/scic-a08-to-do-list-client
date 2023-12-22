
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo-todolist.png"
import useAuth from "../../../hooks/useAuth";


const NavBar = () => {

    const { user } = useAuth();


    return (
        
            <div className="navbar sticky z-10 top-0 bg-white bg-opacity-80   h-20 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost p-2 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#16CAC9]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-[14px] z-[2] rounded-box p-2 shadow bg-neutral-content bg-opacity-80 w-[500%]">
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "font-bold mr-5 text-violet-700"
                                            : " font-bold mr-5 text-[#16CAC9] hover:text-violet-700 duration-150"
                                    }
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "font-bold  mr-5 text-violet-700"
                                            : "font-bold mr-5 text-[#16CAC9] hover:text-violet-700 duration-150  "
                                    }
                                    to="aboutUs"
                                >
                                    AboutUs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "font-bold  mr-5 text-violet-700"
                                            : "font-bold mr-5 text-[#16CAC9] hover:text-violet-700 duration-150  "
                                    }
                                    to="contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                    <Link to="/"><img src={logo} className="w-1/3 hidden lg:flex" alt="" /></Link>
                </div>
                <div className="navbar-center">
                    <ul className="text-[#16CAC9] menu-horizontal px-1 hidden lg:flex">
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? " border-b-[3px] border-violet-700 font-bold mr-5 pb-1 text-violet-700"
                                        : " font-bold mr-5 text-[#16CAC9] hover:text-violet-700 hover:border-b-[3px] hover:border-violet-700 hover:pb-1 duration-150"
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "border-b-[3px] border-violet-700 font-bold pb-1 mr-5 text-violet-700"
                                        : "font-bold mr-5 text-[#16CAC9] hover:text-violet-700 hover:border-b-[3px] duration-150 hover:border-violet-700 hover:pb-1"
                                }
                                to="aboutUs"
                            >
                                AboutUs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "border-b-[3px] border-violet-700 font-bold pb-1 mr-5 text-violet-700"
                                        : "font-bold mr-5 text-[#16CAC9] hover:text-violet-700 hover:border-b-[3px] duration-150 hover:border-violet-700 hover:pb-1"
                                }
                                to="contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <Link to="/"><img src={logo} className="lg:w-1\3  p-2 md:p-0 h-32 lg:hidden" alt="" /></Link>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? (
                            ""
                        )
                            :
                            (
                                <p>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? " border-b-2 border-violet-700 font-bold mr-5 pb-1 text-violet-700"
                                                : " font-bold mr-5 hover:text-violet-700 hover:border-b-2 hover:border-violet-700 text-[#16CAC9] hover:pb-1 duration-150"
                                        }
                                        to="/login"
                                    >
                                        LogIn
                                    </NavLink>
                                </p>
                            )
                    }
                </div>
            </div>
        
    );
};

export default NavBar;