import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import {
  userData,
  isResetPassword,
} from "../../services/store/authReducer/selectors";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
export const LOGIN = "/login"
export const REGISTER = "/register"
export const FORGOT_PASSWORD = "/forgot-password"
export const RESET_PASSWORD = "/reset-password"
export const PROFILE = "/profile"
export const PROFILE_ORDERS = "/profile/orders"

const ProtectedRouteElement = ({ element }) => {
  const user = useSelector(userData);
  const isResetPass = useSelector(isResetPassword);
  const location = useLocation();

  if (!user && location.pathname === "/reset-password" && !isResetPass) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  if (
    (user && location.pathname === LOGIN) ||
    (user && location.pathname === REGISTER) ||
    (user && location.pathname === FORGOT_PASSWORD) ||
    (user && location.pathname === RESET_PASSWORD)
  ) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} state={{ from: location }} />;
  }

  if (
    (!user && location.pathname === PROFILE) ||
    (!user && location.pathname === PROFILE_ORDERS)
  ) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
};

ProtectedRouteElement.propTypes = {
  element: PropTypes.element,
}

export default ProtectedRouteElement;
