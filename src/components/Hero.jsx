import React from "react";

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
        <div className="hero-select">
          <h3 className="color-white">Choose your passion:</h3>
          <div className="hero-btn-container">
            <button className="btn">Skiing</button>
            <button className="btn">Biking</button>
            <button className="btn">Walking</button>
          </div>
        </div>
      </div>
    </div>
  );
}
