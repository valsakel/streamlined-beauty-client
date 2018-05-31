import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderBar.css';
import './NavbarCollapseMenu.css';

const NavbarCollapleMenu = () => {
  return (
    <div className="navbar-collapse">
      <button className="navbar-toggle navbar-close" /*aria-expanded={}*/ type="button">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <div className="menu-details">
        <Link to="/">Home</Link>
        <Link to="/board">Browse</Link>
        <Link to="/">How it works</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </div>


    </div>
  )
};

export default NavbarCollapleMenu;