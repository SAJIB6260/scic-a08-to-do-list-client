/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { motion } from "framer-motion"

const Banner = () => {
    const { user } = useAuth();
  return (
    <div
      className="hero min-h-screen bg-cover"
      style={{
        backgroundImage: "url(https://i.ibb.co/jZQ64H0/task-manager-5976.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">
            A Modern Approach to{" "}
            <span className="text-violet-700"> Mastering</span> Your To-Do List
          </h1>
          <p className="mb-5">
            Task Tackler's Handbook: Your guide to organized productivity. Learn
            proven strategies for efficient task management and transform your
            to-do list into a plan for success
          </p>
          
         <div className="w-full flex justify-center">
         {
            user?.email ? 
            <Link to='/dashboard'>
                                            <motion.button
                                whileHover={{ scale: 1.10 }}
                                whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
                                transition={{
                                    duration: 0.125,
                                    ease: "easeInOut"
                                }}
                                className="py-3 mt-2 w-[10rem] rounded-xl text-white bg-gradient-to-b from-violet-300 to-violet-900 flex justify-center border-2 border-white">
                                 Let’s Explore
                            </motion.button>
                </Link> 
            :
            
            <motion.button
                                whileHover={{ scale: 1.10 }}
                                whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
                                transition={{
                                    duration: 0.125,
                                    ease: "easeInOut"
                                }}
                                className="py-3 mt-2 w-[10rem] rounded-xl  text-white bg-gradient-to-b from-violet-300 to-violet-900 flex justify-center border-2 border-white">
                                 <Link to='/login'>Let’s Explore</Link>
                            </motion.button>
          }
         </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;