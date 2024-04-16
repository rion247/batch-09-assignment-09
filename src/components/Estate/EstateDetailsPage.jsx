import { AiOutlineShareAlt } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { FiPrinter } from "react-icons/fi";
import { GiHomeGarage } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { MdOutlineKingBed } from "react-icons/md";
import { RxRulerSquare } from "react-icons/rx";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetailsPage = () => {

    const estateData = useLoaderData();

    const { estateid } = useParams();

    const clickedEstateDetails = estateData.find(item => item.id == estateid);

    const { estate_title, segment_name, description, price, status, area_sq_ft, facilities, beds, baths, garage, image_url, post_time, post_views } = clickedEstateDetails;

    return (
        <div className="max-w-80 md:max-w-xl lg:max-w-4xl xl:max-w-7xl mx-auto h-auto md:mt-4 lg:mt-8 font-poppins">

            <div className="w-full my-12 pb-8 mb-8 border-b border-b-neutral-300 flex flex-col-reverse md:flex-col lg:flex-row gap-6 justify-between items-center">

                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-center lg:justify-start w-full lg:w-2/4">

                    <div className="flex  md:flex-row gap-4 items-center">
                        <h6 className="px-2 py-1 text-sm bg-green-500 rounded font-semibold text-white cursor-pointer uppercase">{segment_name}</h6>
                        <h6 className="px-2 py-1 text-sm bg-red-500 rounded font-semibold text-white cursor-pointer uppercase">{status}</h6>
                    </div>

                    <div className="flex flex-row gap-4 items-center">

                        <div className="flex items-center gap-x-2">
                            <CiClock2 className="text-xl text-neutral-500" />
                            <h6 className="text-sm text-neutral-400 font-normal">{post_time} years ago</h6>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <IoEyeOutline className="text-xl text-neutral-500" />
                            <h6 className="text-sm text-neutral-400 font-normal">{post_views}</h6>
                        </div>

                    </div>

                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 md:justify-center lg:justify-end w-full lg:w-2/4">

                    <div className="flex items-center gap-x-3 cursor-pointer">
                        <BsEnvelope className="text-xl text-neutral-500" />
                        <h6 className="text-base text-neutral-400 font-normal">Email</h6>
                    </div>

                    <div className="flex items-center gap-x-3 cursor-pointer">
                        <FiPrinter className="text-xl text-neutral-500" />
                        <h6 className="text-base text-neutral-400 font-normal">Print</h6>
                    </div>

                    <div className="flex items-center gap-x-3 cursor-pointer">
                        <GoHeart className="text-xl text-neutral-500" />
                        <h6 className="text-base text-neutral-400 font-normal">Save</h6>
                    </div>

                    <div className="flex items-center gap-x-3 cursor-pointer">
                        <AiOutlineShareAlt className="text-xl text-neutral-500" />
                        <h6 className="text-base text-neutral-400 font-normal">Share</h6>
                    </div>

                </div>

            </div>

            <div>

                <div className="flex flex-col md:flex-row justify-between">

                    <h4 className="text-base md:text-lg lg:text-xl xl:text-3xl font-bold mb-4 md:mb-6">{estate_title}</h4>
                    <h4 className="text-base md:text-lg lg:text-xl xl:text-3xl font-bold mb-4 md:mb-6 text-red-500">${price}</h4>

                </div>

                <div className="flex md:flex-row items-start flex-col justify-between lg:justify-start gap-4  lg:gap-8 lg:items-center mb-8">

                    <div className="flex gap-4 lg:gap-8">

                        <div className="flex items-center gap-x-3">
                            <MdOutlineKingBed className="text-2xl text-neutral-500" />
                            <h6 className="text-base text-neutral-400 font-normal">{beds} Beds</h6>
                        </div>

                        <div className="flex items-center gap-x-3">
                            <LiaBathSolid className="text-2xl text-neutral-500" />
                            <h6 className="text-base text-neutral-400 font-normal">{baths} Baths</h6>
                        </div>

                    </div>

                    <div className="flex gap-4 lg:gap-8">

                        <div className="flex items-center gap-x-3">
                            <GiHomeGarage className="text-2xl text-neutral-500" />
                            <h6 className="text-base text-neutral-400 font-normal">{garage} Garage</h6>
                        </div>

                        <div className="flex items-center gap-x-3">
                            <RxRulerSquare className="text-2xl text-neutral-500" />
                            <h6 className="text-base text-neutral-400 font-normal">{area_sq_ft} sqft</h6>
                        </div>

                    </div>


                </div>



                <img className="w-full mx-auto h-[200px] md:h-[350px] lg:h-[550px] xl:h-[650px] rounded md:rounded-xl lg:rounded-2xl xl:rounded-3xl mb-5 md:mb-10" src={image_url} alt="...Loading" />

                <h6 className="text-base md:text-xl lg:text-2xl font-medium">Description:</h6>

                <p className="text-neutral-500 pb-10 border-b border-b-neutral-300 my-3 md:my-4 lg:my-8 text-justify text-sm lg:text-base font-normal">
                    {description}
                </p>

            </div>

            <h6 className="text-base md:text-xl lg:text-2xl font-medium mb-4 lg:mb-6">Facts and Features:</h6>

            <div className="mb-7 md:mb-10 lg:mb-16">

                {
                    facilities.map(item => <p key={item.id} className="text-sm lg:text-base capitalize md:leading-6 lg:leading-8"><li>{item}</li></p>)
                }

            </div>

        </div>
    );
};

export default EstateDetailsPage;