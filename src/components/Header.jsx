/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as HamburgerIcon } from "../assets/hamburger.svg";
import { ReactComponent as ShoppingCart } from "../assets/shopping-cart.svg";
import { ShoppingContext } from "../api/ShopCartContext";

export default function Header({ color }) {
  const [isOpen, setIsOpen] = useState(true);

  // Handle cart notificacion
  const [cart] = useContext(ShoppingContext);
  const [notification, setNotification] = useState(cart.length);
  // Handle is there badge or not
  const cartIsFull = cart.length !== 0;
  useEffect(() => setNotification(cart?.length), [cart]);

  // Handle nav open/close
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
                Proyect
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
        <div className="cart-img-container">
          {cartIsFull && (
            <div className="cart-img-numero">
              <p>{notification}</p>
            </div>
          )}
          <Link to={"/cart"}>
            {
              <ShoppingCart
                className="cart-img"
                alt="Shopping Cart in colors"
              />
            }
          </Link>
        </div>
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
