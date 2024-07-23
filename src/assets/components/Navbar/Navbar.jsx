import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location]);
  return (
    <div className="navbar">
      <div className="logo">
        <h1 onClick={()=>navigate('/')}>Practice</h1>
      </div>
      <div className="nav">
        <NavLink className="nav-item" to="/">
          Home
        </NavLink>
        <NavLink className="nav-item" to="/products">
          Products
        </NavLink>
        <NavLink className="nav-item" to="/categories">
          Categories
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
