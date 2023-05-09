import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import {
  userData,
  isResetPassword,
} from "../../services/store/authReducer/selectors";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";


const ProtectedRouteElement = ({ element }) => {
  const user = useSelector(userData);
  const isResetPass = useSelector(isResetPassword);
  const location = useLocation();

  if (!user && location.pathname === "/reset-password" && !isResetPass) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  if (
    (user && location.pathname === "/login") ||
    (user && location.pathname === "/register") ||
    (user && location.pathname === "/forgot-password") ||
    (user && location.pathname === "/reset-password")
  ) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} state={{ from: location }} />;
  }

  if (
    (!user && location.pathname === "/profile") ||
    (!user && location.pathname === "/profile/orders")
  ) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
};

ProtectedRouteElement.propTypes = {
  element: PropTypes.element,
}

export default ProtectedRouteElement;
