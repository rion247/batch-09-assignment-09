import { FaDollarSign } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SingleEstates = ({ estate }) => {
    console.log(estate);
    const { estate_title, description, price, status, image_url, id } = estate;
    console.log(image_url);
    return (
        <div className="flex flex-col md:flex-row justify-between rounded-lg border border-neutral-200 font-poppins gap-x-3"  data-aos="flip-left" >

            <div className="relative md:w-2/4">

                <img className= "h-full rounded-lg md:rounded-none md:rounded-l-lg" src={image_url} alt="...Loading" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                    <h6 className="rounded-sm px-2 py-1 bg-green-500 text-xs text-white uppercase font-semibold font-open-sans">Featured</h6>
                    <h6 className="rounded-sm px-2 py-1 bg-red-500 text-xs text-white uppercase font-semibold font-open-sans">{status}</h6>
                </div>

            </div>

            <div className="md:w-2/4 p-4 text-start  flex flex-col">

                <h4 className="text-xl font-semibold mb-3">{estate_title}</h4>

                <p className="text-start text-sm text-neutral-500 mb-3 flex-1">{description.slice(0, 100)}</p>

                <div className="flex items-center justify-start text-blue-700 mb-3 font-semibold lg:text-lg xl:text-xl">
                    <h6 className="text-neutral-700">Price:</h6>
                    <FaDollarSign  />
                    <h6>{price}</h6>
                </div>

                <Link className="table text-base font-semibold text-center w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded px-4" to={`estates/${id}`}>Details</Link>


            </div>







        </div>
    );
};

export default SingleEstates;