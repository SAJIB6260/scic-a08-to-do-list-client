import { useState } from 'react'
// Components
import MenuItem from './MenuItem'

// Icons
import { GrLogout } from 'react-icons/gr'
import { FcHome } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import useAuth from '../../hooks/useAuth'







const Sidebar = () => {
    const [isActive, setActive] = useState(true);
    const { logOut } = useAuth();
    const navigate = useNavigate();


    // console.log(isAdmin)


    // logOut from page
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/")
            })
            .catch(error => console.log(error))
    }

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }


    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100  text-gray-800 flex justify-end md:hidden'>


                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between min-h-screen overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* If a user is host */}
                        <nav>
                            <MenuItem
                                icon={CgProfile}
                                label='Admin Profile'
                                address='/dashboard'
                            />

                        </nav>

                    </div>
                </div>

                <div>
                    <hr />

                    <MenuItem
                        icon={FcHome}
                        label='Home'
                        address='/'
                    />

                    <button className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' />

                        <span onClick={handleLogOut} className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar;