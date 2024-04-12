import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from './../../AuthProvider/AuthProvider';
import { PropTypes } from 'prop-types';
// import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
        
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace />
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;