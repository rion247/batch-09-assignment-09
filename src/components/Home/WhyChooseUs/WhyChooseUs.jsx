import financemadeeasy from '../../../../src/assets/financemadeeasy.png';
import tranperancy from '../../../../src/assets/tranperancy.png';
import nearbyme from '../../../../src/assets/nearbyme.png';
import getimportantnotification from '../../../../src/assets/getimportantnotification.png';
import trustedbythousand from '../../../../src/assets/trustedbythousand.png';
import widerangeproperty from '../../../../src/assets/widerangeproperty.png';
const WhyChooseUs = () => {
    return (
        <div className="font-poppins mt-10 md:mt-16 lg:mt-24 xl:mt-32 text-center container mx-auto mb-10 md:mb-16 lg:mb-24 xl:mb-32 ">

            <h4 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold mb-12">Why Choose Us</h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-start max-w-xs md:max-w-2xl lg:max-w-4xl  xl:max-w-full mx-auto">

                <div className="flex justify-start items-start gap-x-4 p-4 w-full">
                    <img className="w-10 md:w-16 h-10 md:h-16" src={widerangeproperty} alt="...Loading" />
                    <div>
                        <h6 className="font-semibold text-base md:text-lg mb-2">WIDE RANGE OF PROPERTIES</h6>
                        <p className="font-open-sans text-sm md:text-base text-neutral-500">
                            With a robust selection of popular properties on hand, as well as leading properties from experts.
                        </p>
                    </div>
                </div>

                <div className="flex justify-start items-start gap-x-4 p-4 w-full">
                    <img className="w-10 md:w-16 h-10 md:h-16" src={financemadeeasy} alt="...Loading" />
                    <div>
                        <h6 className="font-semibold text-base md:text-lg mb-2">FINANCING MADE EASY</h6>
                        <p className="font-open-sans text-sm md:text-base text-neutral-500">
                            Our stress-free finance department that can find financial solutions to save you money.
                        </p>
                    </div>
                </div>

                <div className="flex justify-start items-start gap-x-4 p-4 w-full">
                    <img className="w-10 md:w-16 h-10 md:h-16" src={trustedbythousand} alt="...Loading" />
                    <div>
                        <h6 className="font-semibold text-base md:text-lg mb-2">TRUSTED BY THOUSANDS </h6>
                        <p className="font-open-sans text-sm md:text-base text-neutral-500">
                            10 new offers every day. 350 offers on site, trusted by a community of thousands of users.
                        </p>
                    </div>
                </div>

                <div className="flex justify-start items-start gap-x-4 p-4 w-full">
                    <img className="w-10 md:w-16 h-10 md:h-16" src={getimportantnotification} alt="...Loading" />
                    <div>
                        <h6 className="font-semibold text-base md:text-lg mb-2">GET IMPORTANT NOTIFICATIONS </h6>
                        <p className="font-open-sans text-sm md:text-base text-neutral-500">
                            Receive advices, listings, and neighborhood information.
                        </p>
                    </div>
                </div>

                <div className="flex justify-start items-start gap-x-4 p-4 w-full">
                    <img className="w-10 md:w-16 h-10 md:h-16" src={tranperancy} alt="...Loading" />
                    <div>
                        <h6 className="font-semibold text-base md:text-lg mb-2">TRANSPARENCY </h6>
                        <p className="font-open-sans text-sm md:text-base text-neutral-500">
                            You and your landlord always see the same info, and you will get all important information directly 
                        </p>
                    </div>
                </div>

                <div className="flex justify-start items-start gap-x-4 p-4 w-full">
                    <img className="w-10 md:w-16 h-10 md:h-16" src={nearbyme} alt="...Loading" />
                    <div>
                        <h6 className="font-semibold text-base md:text-lg mb-2">NEAR BY ME </h6>
                        <p className="font-open-sans text-sm md:text-base text-neutral-500">
                        Search near top-rated schools and explore neighborhoods. 
                        </p>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default WhyChooseUs;