import React from "react";
import SubSelect from "../components/SubSelect";
import { Outlet } from "react-router-dom";

export default function SkiLayout() {
  const props = {
    to1: "jahorina",
    to2: "bjelasnica",
    btn1: "Jahorina",
    btn2: "Bjelasnica",
  };

  return (
    <>
      <SubSelect dataProps={{ ...props }} />
      <Outlet />
    </>
  );
}
