import { BiLogoGoogle } from 'react-icons/bi';
import { RxGithubLogo } from 'react-icons/rx';
import {  useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {

    const {signInWithGoogle, signInWithGithub} = useAuth()
    const navigate = useNavigate();
    // const location = useLocation();


    //google log in handle

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user)
            toast.success('User logged in successfully');
            navigate("dashboard")
        })
        .catch(error => {
            toast.error(error.message)
        })
    }


    //github logIn Handle 

    const handleGithubSignIn = () =>{
        signInWithGithub()
        .then(result => {
            console.log(result.user)
            toast.success('User logged in successfully');
            navigate("dashboard")
        })
        .catch(error => {
            toast.error(error.message)
        })
    }


    return (

            <div className="grid grid-cols-1 gap-3 my-5 px-8">
                <button
                    onClick={handleGoogleSignIn}
                    className="text-lg border-2 border-blue-600 text-blue-700 flex justify-center text-center items-center w-full gap-2 py-2 font-semibold rounded-lg hover:bg-blue-600 hover:text-white">
                    <BiLogoGoogle></BiLogoGoogle>
                    Google
                </button>
                <button
                    onClick={handleGithubSignIn}
                    className="text-lg border-2 border-[#403F3F] dark:border-white text-[#403F3F] dark:text-white flex justify-center text-center items-center w-full gap-2 py-2 font-semibold rounded-lg  hover:text-white hover:bg-[#403F3F]">
                    <RxGithubLogo></RxGithubLogo>
                    Github
                </button>
            </div>
    );
};

export default SocialLogin;