import { Link, NavLink } from "react-router-dom";
import siteMainLogoPic from '/siteLogo.png';
import userProfileImage from '../../assets/user.png';

const NavBar = () => {

    const links = <>
        <NavLink to="/" className={({ isActive }) =>
            isActive ? "bg-red-500 text-white px-4 py-2 rounded" : "bg-transparent px-4 py-2 rounded"}>Home</NavLink>
        <NavLink to="/updateProfile" className={({ isActive }) =>
            isActive ? "bg-red-500 text-white px-4 py-2 rounded" : "bg-transparent px-4 py-2 rounded"}>Update Profile</NavLink>
    </>

    return (

        <div className="container mx-auto mt-6 font-poppins">

            <div className="flex justify-center md:hidden">
                <Link to='/' className="text-base md:hidden font-extrabold flex items-center"><img className="w-6 h-6 -translate-y-1 mr-1" src={siteMainLogoPic} alt="...Loading" />MODERN<span className="text-red-500">LIVING</span></Link>
            </div>

            <div className="navbar">

                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>

                    <Link to='/' className="text-base md:text-lg lg:text-2xl font-extrabold hidden md:flex md:items-center"><img className="w-6 h-6 lg:w-12 lg:h-12 -translate-y-1 lg:-translate-y-3 mr-1" src={siteMainLogoPic} alt="...Loading" />MODERN<span className="text-red-500">LIVING</span></Link>
                    
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-base gap-x-8 text-neutral-500 font-normal">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    <img className="w-5 h-5 md:w-6 lg:w-10 md:h-6 lg:h-10 mr-3 md:mr-4" src={userProfileImage} alt="...Loading" />
                    <Link to='/login' className="bg-neutral-700 text-white px-3 md:px-6 lg:px-10 py-1 lg:py-2 font-medium text-sm md:text-base lg:text-xl">Log In</Link>
                </div>

            </div>

        </div>

    );
};

export default NavBar;



