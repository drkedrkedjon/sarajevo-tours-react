import React from "react";
import { NavLink } from "react-router-dom";

export default function HeroProduct({ title, text, price }) {
  return (
    <div className="hero-container">
      <div className="hero-grid">
        <div className="hero-plate"></div>
        <div className="hero-text">
          <h2 className="ff-title color-white text-stroke">{text}</h2>
          <h2 className="ff-title color-blue text-stroke hero-text-title">
            {title}
          </h2>
        </div>
        <div className="hero-select hero-select-product">
          <h3 className="color-white fs-500">
            Best digital GPS guide in town! Full info, GPS waypoints and more...
          </h3>
          <p className="fs-700 price">{price}€</p>
          <div className="hero-btn-container">
            <NavLink
              to="skiing"
              className={({ isActive }) =>
                isActive ? "btn-active btn" : "btn btn-green"
              }
            >
              Add to cart
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

// className={`${({ isActive }) =>
//   isActive ? "btn-active" : ""} btn btn-green`}
