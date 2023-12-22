import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registation from "../pages/Registation/Registation";
import Dashboard from "../Layouts/Dashboard";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import CreateToDo from "../pages/Dashboard/CreateToDo/CreateToDo";
import MyToDoList from "../pages/Dashboard/MyToDoList/MyToDoList";





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
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
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
            {
                index: true,
                element: <CreateToDo></CreateToDo>            
              },
            {
                path: "mytodo",
                element: <MyToDoList></MyToDoList>            
              },
        ]
    }
]);