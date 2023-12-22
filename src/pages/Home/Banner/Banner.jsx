/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

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
          
          {
            user?.email ? 
            <Link to='/dashboard' className="btn btn-primary bg-violet-700 hover:text-[105%] ">Let’s Explore</Link> 
            :
            <Link to='/login' className="btn btn-primary bg-violet-700 hover:text-[105%] ">Let’s Explore</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Banner;