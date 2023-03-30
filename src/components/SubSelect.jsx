/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

export default function SubSelect({ dataProps }) {
  const { to1, to2, btn1, btn2 } = dataProps;
  return (
    <div className="sub-select">
      <h3 className="color-white">Choose your mountain:</h3>
      <div className="sub-btn-container">
        <NavLink
          to={to1}
          className={({ isActive }) =>
            isActive ? "btn-active btn" : "btn btn-green"
          }
        >
          {btn1}
        </NavLink>
        <NavLink
          to={to2}
          className={({ isActive }) =>
            isActive ? "btn-active btn" : "btn btn-green"
          }
        >
          {btn2}
        </NavLink>
      </div>
    </div>
  );
}
