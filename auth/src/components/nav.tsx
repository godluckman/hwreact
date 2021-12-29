import React from 'react';
import { NavLink } from "react-router-dom";
import AuthStatus from "./authStatus";

const Nav = () => {
    return (

         <div className="lb-header">
             <AuthStatus />
             <NavLink to="/login" id="login-box-link">Login</NavLink>
             <NavLink to="/reg" id="signup-box-link">Registration</NavLink>
             <NavLink to="/main">Main page</NavLink>
             <NavLink to="/info">Info</NavLink>
         </div>
    );
};

export default Nav;