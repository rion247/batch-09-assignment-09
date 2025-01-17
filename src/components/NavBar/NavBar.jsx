import { Link, NavLink } from "react-router-dom";
import siteMainLogoPic from '/siteLogo.png';
import userProfileImage from '../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";


const NavBar = () => {

    const { user, userSignOut, loading } = useContext(AuthContext);

    // console.log(user);

    const links = <>
        <NavLink to="/" className={({ isActive }) =>
            isActive ? "bg-red-500 text-white px-4 py-2 rounded" : "bg-transparent px-4 py-2 rounded"}>Home</NavLink>
        <NavLink to="/updateProfile" className={({ isActive }) =>
            isActive ? "bg-red-500 text-white px-4 py-2 rounded" : "bg-transparent px-4 py-2 rounded"}>Update Profile</NavLink>
        <NavLink to="/meetOurTeam" className={({ isActive }) =>
            isActive ? "bg-red-500 text-white px-4 py-2 rounded" : "bg-transparent px-4 py-2 rounded"}>Team Member</NavLink>
    </>

    if (loading) {
        return <Loading></Loading>
    }

    const handleSignOutButton = () => {

        userSignOut()
            .then(() => {
                toast('Sign-out successful!!!');
            }).catch((error) => {
                console.log('An error happened', error);
            });
    }

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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
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

                    {
                        user ?

                            <div className="dropdown dropdown-hover dropdown-end">
                                <div tabIndex={0} role="button" className="btn-neutral m-3"><img className="w-5 h-5 md:w-6 lg:w-10 md:h-6 lg:h-10 mr-3 md:mr-4 rounded-full" src={user.photoURL} alt="...Loading" /></div>
                                <div tabIndex={0} className="dropdown-content z-10 card card-compact p-2 shadow bg-red-500 text-primary-content">
                                    <div className="card-body">
                                        <h3 className="text-sm md:text-base lg:text-lg xl:text-xl font-bold">{user.displayName}</h3>
                                        <p className="text-sm">{user.email}</p>
                                    </div>
                                </div>
                            </div>

                            : <img className="w-5 h-5 md:w-6 lg:w-10 md:h-6 lg:h-10 mr-2 md:mr-4" src={userProfileImage} alt="...Loading" />
                    }

                    {
                        user ?
                            <Link onClick={handleSignOutButton} className="bg-red-500 text-white px-3 md:px-6 lg:px-10 py-1 lg:py-2 font-medium text-sm md:text-base lg:text-xl rounded md:rounded-md lg:rounded-lg">Log Out</Link>
                            : <Link to='/login' className="bg-neutral-700 text-white px-3 md:px-6 lg:px-10 py-1 lg:py-2 font-medium text-sm md:text-base lg:text-xl rounded md:rounded-md lg:rounded-lg">Log In</Link>
                    }

                </div>

            </div>


        </div>

    );
};

export default NavBar;



