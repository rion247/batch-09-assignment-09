import { useContext, useLocation } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from './../../AuthProvider/AuthProvider';
import { PropTypes } from 'prop-types';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    // const location = useLocation;

    if(user){
        return {children}
    }

    return <Navigate to='/login'/>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;