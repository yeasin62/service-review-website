import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext);
    const location = useLocation();

    if(loading){
        return <Spinner animation="grow" variant="dark" />;
    }
    if(user && user.uid){
        return children;
    }
   
    return (
        <Navigate to={'/login'} state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;