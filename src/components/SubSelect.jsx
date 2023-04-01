/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

export default function SubSelect({ searchType, dataProps }) {
  const { to1, to2, btn1, btn2, title } = dataProps;
  return (
    <div className="sub-select">
      <h3 className="color-white fs-500">{title}</h3>
      <div className="sub-btn-container">
        <NavLink
          to={`?type=${to1}`}
          className={to1 === searchType ? "btn btn-active" : "btn btn-green"}
        >
          {btn1}
        </NavLink>
        <NavLink
          to={`?type=${to2}`}
          className={to2 === searchType ? "btn btn-active" : "btn btn-green"}
        >
          {btn2}
        </NavLink>
      </div>
      <NavLink className="underline" to=".">
        Clear filter
      </NavLink>
    </div>
  );
}
