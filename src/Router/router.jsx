import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MainLayOut from "../components/MainLayOut/MainLayOut";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Register from "../components/Register/Register";
import LoginPage from "../components/LoginPage/LoginPage";

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
                element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
            },
            {
                path: "/register",
                element: <Register/>,
            },
            {
                path: "/login",
                element: <LoginPage/>,
            },
        ],
    },
]);

export default router;