import { useEffect } from "react";
import { useState } from "react";
import SingleEstates from "./SingleEstates";

const Estates = () => {

    const [estates, SetEstates] = useState([]);

    useEffect(() => {
        fetch('estate.json')
            .then(response => response.json())
            .then(data => SetEstates(data))
    }, [])

    return (
        <div className="font-poppins mt-10 md:mt-16 lg:mt-24 xl:mt-32 text-center container mx-auto">

            <h4 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold mb-3">Estate Section</h4>

            <p className="text-xs md:text-sm xl:text-base text-neutral-500 text-center mb-10 md:mb-12 lg:mb-16 xl:mb-24 w-[350px] md:w-[635px] xl:w-[750px] mx-auto">
                Sartorial chicharrones blue bottle taxidermy helvetica ethical, beard swag offal kinfolk. You probably haven’t heard of them hell of offal mlkshk messenger bag squid plaid tousled.
            </p>

            <div className="max-w-xs md:max-w-2xl xl:max-w-full mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6" >

                {
                    estates.map(estate => <SingleEstates key={estate.id} estate={estate}></SingleEstates>)
                }

            </div>



        </div>
    );
};

export default Estates;