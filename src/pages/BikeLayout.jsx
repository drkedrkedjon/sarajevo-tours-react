import React from "react";
import SubSelect from "../components/SubSelect";
import { Outlet } from "react-router-dom";

export default function BikeLayout() {
  const props = {
    to1: "single-day",
    to2: "multi-day",
    btn1: "Single day",
    btn2: "Multi day",
  };

  return (
    <>
      <SubSelect dataProps={{ ...props }} />
      <Outlet />
    </>
  );
}
