import React from "react";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-grid">
        <div className="hero-fondo"></div>
        <div className="hero-text">
          <h2>Best adventure gps guides in and around the city of:</h2>
          <h2>Sarajevo</h2>
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
