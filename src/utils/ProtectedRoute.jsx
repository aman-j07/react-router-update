import React from 'react'
import {Navigate, useLocation} from "react-router-dom"
import useGetUser from '../hooks/useGetUser';

const ProtectedRoute = ({children}) => {
    const userContext=useGetUser();
    let location = useLocation();

    if(!userContext.user) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;