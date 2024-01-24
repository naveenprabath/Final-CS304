import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const ProtectRoute = ({ children }) => {
  const token = cookies.get("autoCreditCookie");
  const userRole = JSON.parse(localStorage.getItem("userRole"));

  if (!token) {
    return <Navigate to="/Login" />;
  }
  return children;
};

export default ProtectRoute;
