import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card flow">
        <p>Number of monthly visitors:</p>
        <p className="fs-700 color-blue">14.258</p>
        <p>Number of monthly sales:</p>
        <p className="fs-700 color-blue">427</p>
        <p>Percentage visitors / sales:</p>
        <p className="fs-700 color-blue">3%</p>
      </div>
      <div className="dashboard-card flow">
        <p>Monthly income:</p>
        <p className="fs-700 color-blue">10.675€</p>
        <p>Year over year:</p>
        <p className="fs-700 color-blue">+7%</p>
        <p>Product sold:</p>
        <p className="fs-700 color-blue">675</p>
      </div>
    </div>
  );
}
