import newsPic01 from '../../../../src/assets/newspic01.jpg';
import newsPic02 from '../../../../src/assets/newspic02.jpg';
import newsPic03 from '../../../../src/assets/newspic03.jpg';

const LatestNews = () => {
    return (
        <div className="font-poppins mt-10 md:mt-16 lg:mt-24 xl:mt-32 text-center container mx-auto mb-10 md:mb-16 lg:mb-24 xl:mb-32 lg:max-w-5xl xl:max-w-6xl p-6  space-y-6 sm:space-y-12">

            <h4 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold mb-12">Latest News</h4>

            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline text-start">
                    <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={newsPic01} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold group-hover:underline group-focus:underline">Retail banks wake up to digital lending this year</h3>
                        <p className='text-neutral-500 text-sm xl:text-base font-normal'>Show pony game plan, close the loop so what do you feel you would bring to the table if you were hired for this position. Powerpoint Bunny shotgun approach, nor powerPointless. ... </p>
                    </div>
                </a>

                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline text-start">
                    <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={newsPic02} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold group-hover:underline group-focus:underline">Within the construction industry as overdraft</h3>
                        <p className='text-neutral-500 text-sm xl:text-base font-normal'>Waste of resources locked and loaded, programmatically dog and pony show, productize or paddle on both sides accountable talk. Social currency pipeline. ... </p>
                    </div>
                </a>

                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline text-start">
                    <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={newsPic03} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold group-hover:underline group-focus:underline">Strategic and commercial approach</h3>
                        <p className='text-neutral-500 text-sm xl:text-base font-normal'>Race without a finish line this is not the hill i want to die on work flows , but deliverables, so low-hanging fruit blue sky thinking. Run it up the flag pole red flag. Diversi... </p>
                    </div>
                </a>

            </div>

        </div>
    );
};

export default LatestNews;