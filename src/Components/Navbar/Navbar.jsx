import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
import Clock from "../Clock/Clock";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">React-Practices</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li><Clock/></li>
      </ul>
    </nav>
  );
};

export default Navbar;
