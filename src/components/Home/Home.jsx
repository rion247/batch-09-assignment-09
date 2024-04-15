import { Helmet } from "react-helmet";
import NavBar from "../NavBar/NavBar";
import HeroBanner from "./HeroBanner/HeroBanner";
import Estates from "../Estate/Estates";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import BannerSection from "./BannerSection/BannerSection";


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Modern Living | Home Page</title>
            </Helmet>

            <NavBar></NavBar>
            <HeroBanner></HeroBanner>
            <Estates></Estates>
            <WhyChooseUs></WhyChooseUs>
            <BannerSection></BannerSection>





        </div>
    );
};

export default Home;