import { Link } from "react-router-dom";
import siteMainLogoPic from '/siteLogo.png';


const Header = () => {
    return (
        <div className="font-poppins p-8 flex justify-center">

            <div>

                <Link to='/' className="text-base md:text-lg lg:text-4xl font-extrabold hidden md:flex md:items-center"><img className="w-6 h-6 lg:w-12 lg:h-12 -translate-y-1 lg:-translate-y-3 mr-1" src={siteMainLogoPic} alt="...Loading" />MODERN<span className="text-red-500">LIVING</span></Link>

            </div>



        </div>
    );
};

export default Header;