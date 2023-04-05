/* eslint-disable react/prop-types */
import React from "react";
import Button from "../components/Button";

export default function HeroProduct({ title, text, price }) {
  return (
    <div className="hero-container">
      <div className="hero-grid">
        <div className="hero-plate box-shadow-pink"></div>
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
            <Button color="green" title="Admin panel" />
          </div>
        </div>
      </div>
    </div>
  );
}
