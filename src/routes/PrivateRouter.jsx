import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRouter = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();


    if(loading){
        return <div className="h-screen flex justify-center items-center dark:bg-slate-500"><img src="https://i.ibb.co/1q7qF25/ZZ5H.gif" alt="loading..." /></div>
    }

    if(user){
        return children;
    }

    return  <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;