import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MainLayOut from "../components/MainLayOut/MainLayOut";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Register from "../components/Register/Register";
import LoginPage from "../components/LoginPage/LoginPage";
import TestimonialDetails from "../components/Home/Testimonial/TestimonialDetails";
import EstateDetailsPage from "../components/Estate/EstateDetailsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/updateProfile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/testimonial/:clickedid",
                element: <PrivateRoute><TestimonialDetails /></PrivateRoute>,
                loader: () => fetch('testimonials.json'),
            },
            {
                path: "/estates/:estateid",
                element: <EstateDetailsPage/>,
                loader: () => fetch('../../public/estate.json'),
            },
        ],
    },
]);

export default router;