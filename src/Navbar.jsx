import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Student Performance Tracker</div>

      <ul className="nav-links">
        <li>
          <a href="/SMSapp/">Home</a>
        </li>
        <li>
          <a href="/SMSapp/users">Students</a>
        </li>
        <li>
          <a href="/SMSapp/products">Products</a>
        </li>
        <li>
          <a href="/SMSapp/about">About</a>
        </li>
        <li>
          <a href="/SMSapp/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
