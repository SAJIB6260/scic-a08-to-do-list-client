import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registation from "../pages/Registation/Registation";
import Dashboard from "../Layouts/Dashboard";
// import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

        ]
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "registation",
        element: <Registation></Registation>
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            // admine route
            // {
            //     path: "adminProfile",
            //     element: <AdminProfile></AdminProfile>
            // }
        ]
    }
]);