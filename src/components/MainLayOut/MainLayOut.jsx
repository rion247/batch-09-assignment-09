import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const MainLayOut = () => {
    return (
        <div>

            <NavBar></NavBar>

            <Outlet />

        </div>
    );
};

export default MainLayOut;