import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useGetUser from "../hooks/useGetUser";

const ProtectedRoute = ({ children }) => {
  const user = useGetUser();
  let location = useLocation();

  // user is navigated to login page if he/she is not logged in
  if (!user) {
    return <Navigate to="/login" state={{ from: location }}/>;
  }
  return children;
};

export default ProtectedRoute;
