import React from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import {
  isUserAuthentificated,
  userData,
  isAuthChecked,
} from "../../services/store/authReducer/selectors";
import { useSelector } from "react-redux";

const ProtectedRouteElement = ({ element, onlyAuthorizedUsers = false }) => {
  const user = useSelector(userData);
  const isAuthentificated = useSelector(isUserAuthentificated);
  const AuthChecked = useSelector(isAuthChecked);
  const location = useLocation();
  const navigate = useNavigate();


  if (
    (!user && location.pathname === "/profile") ||
    (!user && location.pathname === "/profile/orders")
  ) {
    return <Navigate to="/login" state={{ from: location }}/>;
  }

  if (
    (user && location.pathname === "/login") ||
    (user && location.pathname === "/register") ||
    (user && location.pathname === "/forgot-password") ||
    (user && location.pathname === "/reset-password")
  ) {
    return <Navigate to="/" />;
  }

  // if(!onlyAuthorizedUsers && user) {
  //     return <Navigate to="/"/>
  // }
  // if(onlyAuthorizedUsers) {
  //     return <Navigate to="/login"/>
  // }

  return element;
};

export default ProtectedRouteElement;
