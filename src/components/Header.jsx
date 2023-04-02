/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export default function Header({ color }) {
  return (
    <div className="header-container">
      <div className="nav-cart">
        <nav>
          <ul className="nav-list fs-500">
            <li>About</li>
            <li>Admin</li>
            <li>Contact</li>
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
