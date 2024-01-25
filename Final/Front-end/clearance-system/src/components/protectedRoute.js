import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";


const cookies = new Cookies();

const ProtectRoute = ({ children, to }) => {
  const token = cookies.get("Clearance");
 
  const userRole = JSON.parse(localStorage.getItem("userRole"));

  if (!token) {
    return <Navigate to={to} />;
  }
  return children;

  
};

export default ProtectRoute;
