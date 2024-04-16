import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ImFacebook2, ImGoogle2 } from "react-icons/im";

const TestimonialDetails = () => {
    const testimonials = useLoaderData();
    const { clickedid } = useParams();
    const clickedTestimonials = testimonials.find(item => item.id == clickedid);

    const { id, name, profile_pic, title, designation, company, description } = clickedTestimonials;

    return (

        <div className="flex justify-center items-center mt-10 md:mt-20 lg:mt-28 xl:min-h-[calc(100vh-250px)] font-poppins">

            <Helmet>
                <title>Modern Living | Testimmonial Page</title>
            </Helmet>

            <div className="max-w-80 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl p-3 md:p-5 lg:p-10 xl:p-16 mx-auto border border-neutral-300 rounded-2xl flex flex-col md:flex-row justify-center items-center gap-6">

                <div className="flex flex-col items-center gap-6 md:w-2/5">

                    <img className="w-32 h-32 md:w-40 lg:w-52 xl:w-80 md:h-40 lg:h-52 xl:h-80 rounded-full border-2 border-neutral-300 p-2" src={profile_pic} alt="...Loading" />


                    <div className="text-center flex flex-col gap-6 items-center justify-center ">

                        <div>
                            <h6 className="text-xs lg:text-base text-neutral-500">Full Name: <span className="text-base lg:text-lg text-black font-bold">{name}</span></h6>
                            <h6 className="text-xs lg:text-base text-neutral-500">Designation: <span className="text-base lg:text-lg text-black font-bold">{designation}</span></h6>
                            <h6 className="text-xs lg:text-base text-neutral-500">Designation: <span className="text-base lg:text-lg text-black font-bold">{company}</span></h6>
                        </div>

                        <div className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl flex gap-4 lg:gap-6">
                            <a href="#"><ImGoogle2 /></a>
                            <a href="#"><ImFacebook2 /></a>
                        </div>
                    </div>

                </div>

                <div className="md:w-2/4 text-start">
                    <h6 className=" text-sm xl:text-lg font-semibold py-2 lg:py-4 text-neutral-500"><i>ID NO: {id}</i></h6>
                    <h4 className="py-2 lg:py-4 text-base lg:text-xl xl:text-2xl font-bold border-y-2 border-dashed border-neutral-300 mb-4 lg:mb-6">{title}</h4>
                    <p className=" text-sm lg:text-base text-neutral-500 font-normal leading-6 lg:leading-8 text-justify">{description}</p>
                </div>






                <div>

                </div>



            </div>

        </div>

    );
};

export default TestimonialDetails;