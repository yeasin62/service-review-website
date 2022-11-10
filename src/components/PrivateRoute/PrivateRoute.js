import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext);
    const location = useLocation();

    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 text-center"></div>;
    }
    if(user && user.uid){
        return children;
    }
   
    return (
        <Navigate to={'/login'} state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;