import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">

        <a className="navbar-brand fw-bold" href="/">
          Student Performance Tracker
        </a>

        {/* Collapse Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/users">Students</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/products">Products</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
