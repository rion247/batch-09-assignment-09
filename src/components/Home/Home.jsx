import { Helmet } from "react-helmet";
import NavBar from "../NavBar/NavBar";
import HeroBanner from "./HeroBanner/HeroBanner";


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Modern Living | Home Page</title>
            </Helmet>

            <NavBar></NavBar>

            <HeroBanner></HeroBanner>

        </div>
    );
};

export default Home;