import React from "react";
import SubSelect from "../components/SubSelect";
import { Outlet } from "react-router-dom";

export default function WalkLayout() {
  const props = {
    to1: "food-walking",
    to2: "history-walking",
    btn1: "Food walks",
    btn2: "History walks",
  };

  return (
    <>
      <SubSelect dataProps={{ ...props }} />
      <Outlet />
    </>
  );
}
