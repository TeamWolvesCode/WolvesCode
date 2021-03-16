import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/js/dist/collapse";

//styles
import "./styles/Navbar.css";

//assets
import logoNav from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <NavLink to="/" activeClassName="navbar-brand">
          <img src={logoNav} alt="" aria-hidden="true" className="navbarLogo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-icon">
            <div className="barButton" />
            <div className="barButton" />
            <div className="barButton" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" activeClassName="nav-link">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" activeClassName="nav-link">
                Stats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" activeClassName="nav-link">
                Testimonials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" activeClassName="nav-link">
                Recent work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" activeClassName="nav-link">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
