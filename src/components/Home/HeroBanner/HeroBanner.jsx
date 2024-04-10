import { BsTextarea } from "react-icons/bs";
import { FaBath } from "react-icons/fa";
import { LuSofa } from "react-icons/lu";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

const HeroBanner = () => {

    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('swiperprogress', (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress, swiper);
        });

        swiperElRef.current.addEventListener('swiperslidechange', (e) => {
            console.log('slide changed', e);
        });
    }, []);


    return (

        <>
            <swiper-container
                ref={swiperElRef}
                slides-per-view="1"
                navigation="true"
                pagination="true"
                autoplay="true"
            >

                <swiper-slide>

                    <div className="w-full h-auto md:mt-4 lg:mt-8 font-poppins">

                        <div className="w-full flex justify-center items-center md:items-end h-screen lg:h-[772px] bg-[url('../../../../src/assets/heroBannerImage01.jpg')] bg-center bg-no-repeat bg-cover p-5 md:p-8 lg:pb-10">

                            <div className="bg-white rounded-md md:rounded-xl lg:rounded-2xl p-4 lg:p-8">

                                <div className="flex flex-col justify-center items-center mb-4 xl:hidden">
                                    <h4 className="md:text-xl lg:text-2xl font-bold md:mb-1 lg:mb-2">Luxury Family Home</h4>
                                    <p className="md:text-sm lg:text-base text-neutral-500">
                                        84 Woodland St. Cocoa, FL 32927
                                    </p>
                                </div>

                                <div className="flex justify-between items-center md:gap-x-16 lg:gap-x-32">

                                    <div className="hidden xl:flex lg:flex-col">
                                        <h4 className="md:text-xl lg:text-2xl font-bold md:mb-1 lg:mb-2">Luxury Family Home</h4>
                                        <p className="md:text-sm lg:text-base text-neutral-500">
                                            84 Woodland St. Cocoa, FL 32927
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap md:flex-nowrap gap-x-8 lg:gap-x-16 items-center">

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className=" bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <LuSofa className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Bedrooms</h6>
                                                <p className="font-bold">5</p>
                                            </div>

                                        </div>

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className="bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <FaBath className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Bathrooms</h6>
                                                <p className="font-bold">1</p>
                                            </div>

                                        </div>

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className="bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <BsTextarea className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Area</h6>
                                                <p className="font-bold">2500 Sq Ft</p>
                                            </div>

                                        </div>

                                        <div className="flex flex-col font-open-sans">

                                            <h6 className="text-base lg:text-lg">For Sale</h6>
                                            <p className="font-bold text-red-500 text-xl lg:text-3xl">$380,000</p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </swiper-slide>

                <swiper-slide>

                    <div className="w-full h-auto md:mt-4 lg:mt-8 font-poppins">

                        <div className="w-full flex justify-center items-center md:items-end h-screen lg:h-[772px] bg-[url('../../../../src/assets/heroBannerImage02.jpg')] bg-center bg-no-repeat bg-cover p-5 md:p-8 lg:pb-10">

                            <div className="bg-white rounded-md md:rounded-xl lg:rounded-2xl p-4 lg:p-8">

                                <div className="flex flex-col justify-center items-center mb-4 xl:hidden">
                                    <h4 className="md:text-xl lg:text-2xl font-bold md:mb-1 lg:mb-2">Townhouses</h4>
                                    <p className="md:text-sm lg:text-base text-neutral-500">
                                        798 Talbot St. Bridgewater, NJ 08807
                                    </p>
                                </div>

                                <div className="flex justify-between items-center md:gap-x-16 lg:gap-x-32">

                                    <div className="hidden xl:flex lg:flex-col">
                                        <h4 className="md:text-xl lg:text-2xl font-bold md:mb-1 lg:mb-2">Townhouses</h4>
                                        <p className="md:text-sm lg:text-base text-neutral-500">
                                            798 Talbot St. Bridgewater, NJ 08807
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap md:flex-nowrap gap-x-8 lg:gap-x-16 items-center">

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className=" bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <LuSofa className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Bedrooms</h6>
                                                <p className="font-bold">4</p>
                                            </div>

                                        </div>

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className="bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <FaBath className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Bathrooms</h6>
                                                <p className="font-bold">3</p>
                                            </div>

                                        </div>

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className="bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <BsTextarea className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Area</h6>
                                                <p className="font-bold">3600 Sq Ft</p>
                                            </div>

                                        </div>

                                        <div className="flex flex-col font-open-sans">

                                            <h6 className="text-base lg:text-lg">For Sale</h6>
                                            <p className="font-bold text-red-500 text-xl lg:text-3xl">$550,000</p>

                                        </div>

                                    </div>


                                </div>



                            </div>

                        </div>

                    </div>

                </swiper-slide>

                <swiper-slide>

                    <div className="w-full h-auto md:mt-4 lg:mt-8 font-poppins">

                        <div className="w-full flex justify-center items-center md:items-end h-screen lg:h-[772px] bg-[url('../../../../src/assets/heroBannerImage05.jpg')] bg-center bg-no-repeat bg-cover p-5 md:p-8 lg:pb-10">

                            <div className="bg-white rounded-md md:rounded-xl lg:rounded-2xl p-4 lg:p-8">

                                <div className="flex flex-col justify-center items-center mb-4 xl:hidden">
                                    <h4 className="md:text-xl lg:text-2xl font-bold md:mb-1 lg:mb-2">Apartments</h4>
                                    <p className="md:text-sm lg:text-base text-neutral-500">
                                        7115 Glenholme Rd. Little Rock, AR
                                    </p>
                                </div>

                                <div className="flex justify-between items-center md:gap-x-16 lg:gap-x-32">

                                    <div className="hidden xl:flex lg:flex-col">
                                        <h4 className="md:text-xl lg:text-2xl font-bold md:mb-1 lg:mb-2">Apartments</h4>
                                        <p className="md:text-sm lg:text-base text-neutral-500">
                                            7115 Glenholme Rd. Little Rock, AR
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap md:flex-nowrap gap-x-8 lg:gap-x-16 items-center">

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className=" bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <LuSofa className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Bedrooms</h6>
                                                <p className="font-bold">4</p>
                                            </div>

                                        </div>

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className="bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <FaBath className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Bathrooms</h6>
                                                <p className="font-bold">3</p>
                                            </div>

                                        </div>

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className="bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <BsTextarea className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Area</h6>
                                                <p className="font-bold">3200 Sq Ft</p>
                                            </div>

                                        </div>

                                        <div className="flex flex-col font-open-sans">

                                            <h6 className="text-base lg:text-lg">For Sale</h6>
                                            <p className="font-bold text-red-500 text-xl lg:text-3xl">$460,000</p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </swiper-slide>

                <swiper-slide>

                    <div className="w-full h-auto md:mt-4 lg:mt-8 font-poppins">

                        <div className="w-full flex justify-center items-center md:items-end h-screen lg:h-[772px] bg-[url('../../../../src/assets/heroBannerImage04.jpg')] bg-center bg-no-repeat bg-cover p-5 md:p-8 lg:pb-10">

                            <div className="bg-white rounded-md md:rounded-xl lg:rounded-2xl p-4 lg:p-8">

                                <div className="flex flex-col justify-center items-center mb-4 xl:hidden">
                                    <h4 className="md:text-xl lg:text-2xl font-bold md:mb-1 lg:mb-2">Student Housing</h4>
                                    <p className="md:text-sm lg:text-base text-neutral-500">
                                        123 College Sunshine Valley, CA 98765
                                    </p>
                                </div>

                                <div className="flex justify-between items-center md:gap-x-16 lg:gap-x-32">

                                    <div className="hidden xl:flex lg:flex-col">
                                        <h4 className="md:text-xl lg:text-2xl font-bold md:mb-1 lg:mb-2">Student Housing</h4>
                                        <p className="md:text-sm lg:text-base text-neutral-500">
                                            123 College Sunshine Valley, CA 98765
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap md:flex-nowrap gap-x-8 lg:gap-x-16 items-center">

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className=" bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <LuSofa className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Bedrooms</h6>
                                                <p className="font-bold">6</p>
                                            </div>

                                        </div>

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className="bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <FaBath className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Bathrooms</h6>
                                                <p className="font-bold">3</p>
                                            </div>

                                        </div>

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className="bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <BsTextarea className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Area</h6>
                                                <p className="font-bold">4200 Sq Ft</p>
                                            </div>

                                        </div>

                                        <div className="flex flex-col font-open-sans">

                                            <h6 className="text-base lg:text-lg">For Sale</h6>
                                            <p className="font-bold text-red-500 text-xl lg:text-3xl">$520,000</p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </swiper-slide>

                <swiper-slide>

                    <div className="w-full h-auto md:mt-4 lg:mt-8 font-poppins">

                        <div className="w-full flex justify-center items-center md:items-end h-screen lg:h-[772px] bg-[url('../../../../src/assets/heroBannerImage03.jpg')] bg-center bg-no-repeat bg-cover p-5 md:p-8 lg:pb-10">

                            <div className="bg-white rounded-md md:rounded-xl lg:rounded-2xl p-4 lg:p-8">

                                <div className="flex flex-col justify-center items-center mb-4 xl:hidden">
                                    <h4 className="md:text-xl lg:text-2xl font-bold md:mb-1 lg:mb-2">Senior Living Communities</h4>
                                    <p className="md:text-sm lg:text-base text-neutral-500">
                                        456 Elderly Avenue, Suite 101, FL 54321
                                    </p>
                                </div>

                                <div className="flex justify-between items-center md:gap-x-16 lg:gap-x-32">

                                    <div className="hidden xl:flex lg:flex-col">
                                        <h4 className="md:text-xl lg:text-2xl font-bold md:mb-1 lg:mb-2">Senior Living Communities</h4>
                                        <p className="md:text-sm lg:text-base text-neutral-500">
                                            456 Elderly Avenue, Suite 101, FL 54321
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap md:flex-nowrap gap-x-8 lg:gap-x-16 items-center">

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className=" bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <LuSofa className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Bedrooms</h6>
                                                <p className="font-bold">11</p>
                                            </div>

                                        </div>

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className="bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <FaBath className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Bathrooms</h6>
                                                <p className="font-bold">6</p>
                                            </div>

                                        </div>

                                        <div className="flex gap-x-2 lg:gap-x-3 items-center">

                                            <div className="bg-red-500 rounded lg:rounded-md flex justify-center items-center w-10 lg:w-16 h-10 lg:h-16">
                                                <BsTextarea className="text-xl lg:text-2xl text-white text-center" />
                                            </div>

                                            <div className="font-open-sans">
                                                <h6 className="text-base lg:text-lg">Area</h6>
                                                <p className="font-bold">6500 Sq Ft</p>
                                            </div>

                                        </div>

                                        <div className="flex flex-col font-open-sans">

                                            <h6 className="text-base lg:text-lg">For Sale</h6>
                                            <p className="font-bold text-red-500 text-xl lg:text-3xl">$780,000</p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </swiper-slide>               

            </swiper-container>
        </>

    );
};

export default HeroBanner;