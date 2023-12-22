import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";
import Footer from "../pages/shared/Footer/Footer";
import { Toaster } from "react-hot-toast";



const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup")
    return (
        <div>
            { noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
            <Toaster></Toaster>
        </div>
        )
};

export default Main;