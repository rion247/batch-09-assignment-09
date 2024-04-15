import { Helmet } from "react-helmet";
import NavBar from "../NavBar/NavBar";
import HeroBanner from "./HeroBanner/HeroBanner";
import Estates from "../Estate/Estates";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import BannerSection from "./BannerSection/BannerSection";
import LatestNews from "./LatestNewsSection/LatestNews";
import Testimonial from "./Testimonial/Testimonial";
import Footer from "./Footer/Footer";


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
            <LatestNews></LatestNews>
            <Testimonial></Testimonial>
            <Footer></Footer>

        </div>
    );
};

export default Home;