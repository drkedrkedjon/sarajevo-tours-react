import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div>
        <p>Number of monthly visitors:</p>
        <p>14.258</p>
        <p>Number of monthly sales:</p>
        <p>427</p>
        <p>Percentage visitors / sales:</p>
        <p>3%</p>
      </div>
      <div>
        <p>Monthly income:</p>
        <p>10.675€</p>
        <p>Year over year:</p>
        <p>+7%</p>
        <p>Product sold:</p>
        <p>675</p>
      </div>
    </div>
  );
}
