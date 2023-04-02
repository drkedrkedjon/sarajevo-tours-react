import React from "react";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-grid">
        <div className="hero-plate"></div>
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
            <NavLink
              to="skiing"
              className={({ isActive }) =>
                isActive ? "btn-active btn" : "btn btn-green"
              }
            >
              Skiing
            </NavLink>
            <NavLink
              to="biking"
              className={({ isActive }) =>
                isActive ? "btn-active btn" : "btn btn-green"
              }
            >
              Biking
            </NavLink>
            <NavLink
              to="walking"
              className={({ isActive }) =>
                isActive ? "btn-active btn" : "btn btn-green"
              }
            >
              Walking
            </NavLink>
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
