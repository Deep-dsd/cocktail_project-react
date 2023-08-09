import React from "react";
import logo from "../logo.svg";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="nav-center">
        <Link to="/">
          <img src={logo} alt="logo-image" className="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <NavLink to="/about">About</NavLink>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
