import React from 'react';
import { NavLink } from "react-router-dom";
import AuthStatus from "./authStatus";
import Google from "./google";

const Nav = () => {
    return (

         <div className="lb-header">
                 <div className="g-signin">
                     <Google/>
                 </div>
             <AuthStatus />
             <NavLink to="/login">Login</NavLink>
             <NavLink to="/reg">Registration</NavLink>
             <NavLink to="/main">Main page</NavLink>
             <NavLink to="/delete">Delete user</NavLink>
             <NavLink to="/info">Info</NavLink>
         </div>
    );
};

export default Nav;