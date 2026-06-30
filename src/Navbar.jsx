import React from "react";
import "./Navbar.css";

function Navbar() {
  return (import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Student Performance Tracker</div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
        </li>

        <li>
          <a href="/users" onClick={() => setMenuOpen(false)}>
            Students
          </a>
        </li>

        <li>
          <a href="/products" onClick={() => setMenuOpen(false)}>
            Products
          </a>
        </li>

        <li>
          <a href="/about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>

        <li>
          <a href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
    <nav className="navbar">
      <div className="logo">Student Performance Tracker</div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/users">Students</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
