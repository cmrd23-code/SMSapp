import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="logo">Student Performance Tracker</div>

      <ul className="nav-items">
        <li  className="nav-items">
          <a className="nav-links" href="/">Home</a>
        </li>
        <li className="nav-items">
          <a className="nav-links" href="/users">Students</a>
        </li>
        <li className="nav-items">
          <a className="nav-links" href="/products">Products</a>
        </li>
        <li className="nav-items">
          <a className="nav-links" href="/about">About</a>
        </li>
        <li className="nav-items">
          <a className="nav-links" href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
