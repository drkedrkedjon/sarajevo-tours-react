import React from "react";
import { NavLink } from "react-router-dom";
import NavBtn from "../components/NavBtn";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-grid">
        <div className="hero-plate box-shadow-blue"></div>
        <div className="hero-text">
          <h2 className="ff-title color-white text-stroke">
            Best adventure gps guides in and around the city of:
          </h2>
          <h2 className="ff-title color-blue text-stroke hero-text-title">
            Sarajevo
          </h2>
        </div>
        <div className="hero-select hero-select-home">
          <h3 className="color-white fs-500">Choose your passion:</h3>
          <div className="hero-btn-container">
            <NavBtn pathTo="skiing" title="Skiing" color="green" />
            <NavBtn pathTo="biking" title="Biking" color="green" />
            <NavBtn pathTo="walking" title="Walking" color="green" />
          </div>
          <NavLink className="underline" to="/">
            Clear selection
          </NavLink>
        </div>
      </div>
    </div>
  );
}

// className={`${({ isActive }) =>
//   isActive ? "btn-active" : ""} btn btn-green`}
