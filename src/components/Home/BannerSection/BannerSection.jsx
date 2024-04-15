
const BannerSection = () => {
    return (
        <div className="font-poppins h-96 bg-gradient-to-b from-neutral-800 to-neutral-600 flex justify-center items-center">

            <div>
                <h2 className="w-72 md:w-[500px] lg:w-[750px] xl:w-[950px] mx-auto text-base md:text-xl lg:text-2xl xl:text-4xl text-white font-medium text-center mb-6">Shoreditch kale chips paleo gochujang, pitchfork succulents cliche pour-over. </h2>

                <div className="text-center flex flex-col md:flex-row gap-6 justify-center">

                    <button className="text-sm md:text-base bg-red-500 px-4 md:px-6 lg:px-8 xl:px-12 py-2 md:py-4 font-normal rounded text-white tracking-wider">SUBMIT PROPERTY</button>
                    <button className="text-sm md:text-base border border-white px-4 md:px-6 lg:px-8 xl:px-12 py-2 md:py-4 font-normal rounded text-white tracking-wider hover:bg-red-500 hover:border-transparent">BROWSE PROPERTIES</button>

                </div>
            </div>
            
        </div>
    );
};

export default BannerSection;