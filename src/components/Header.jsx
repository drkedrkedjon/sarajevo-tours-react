/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger.svg";

export default function Header({ color }) {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className="header-container">
      <div className="nav-cart">
        <nav>
          <button onClick={handleClick} className="hamburger">
            <HamburgerIcon />
          </button>
          <ul aria-hidden={isOpen} className="nav-list fs-500">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-list-link nav-list-link-active"
                    : "nav-list-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-list-link nav-list-link-active"
                    : "nav-list-link"
                }
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-list-link nav-list-link-active"
                    : "nav-list-link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <img
          className="cart-img"
          src="/assets/images/shopping-cart.svg"
          alt="Red and yellow shopping cart"
        />
      </div>
      <div>
        <Link to="/">
          <p className={`fs-700 logo-text ${color} text-shadow-blue`}>
            Sarajevo tours
          </p>
        </Link>
      </div>
    </div>
  );
}
