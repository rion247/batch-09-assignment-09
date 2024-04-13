import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-neutral-100 min-h-screen flex justify-center items-center font-poppins p-12" data-aos="flip-down" data-aos-duration="2500">

            <div className="p-6 md:p-9 lg:p-12 md:rounded-xl lg:rounded-2xl w-80 md:w-[650px] lg:w-[800px] xl:w-fit mx-auto flex justify-center gap-2 items-center flex-col md:flex-row-reverse bg-white shadow-2xl">

                <div className="flex justify-center w-full md:w-1/4 lg:w-2/5 xl:w-2/4">
                    <img className="w-full" src="../../../public/error.png" alt="...Loading" />
                </div>

                <div className="w-full md:w-3/5 xl:w-2/4 text-center md:text-start">

                    <h1 className="text-xs md:text-xl lg:text-2xl xl:text-4xl font-bold">404. An Error Occurred </h1>

                    <h4 className="text-xs text-start lg:text-sm xl:text-base my-2 md:my-3 lg:my-4 text-neutral-500">The requested URL/badpage was not found on this server</h4>

                    <p className="text-xs lg:text-sm xl:text-base xl:mt-10 mb-2 md:mb-4 lg:mb-8 text-start md:text-justify xl:w-[480px]">Feel Free To Go Back To The Home Page By Clicking The Back To Home Button</p>

                    <Link to="/" className="inline-flex items-center justify-center w-full md:px-3 lg:px-4 xl:px-6 py-2 lg:py-3 mb-2 text-sm md:text-base lg:text-lg text-white bg-red-500 font-semibold rounded-md hover:bg-red-600 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                        Back To Home
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default ErrorPage;