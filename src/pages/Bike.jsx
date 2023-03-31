import React from "react";
import SubSelect from "../components/SubSelect";

export default function Bike() {
  const props = {
    title: "Choose the length of adventure:",
    to1: "single-day",
    to2: "multi-day",
    btn1: "Single day",
    btn2: "Multi day",
  };

  return (
    <>
      <SubSelect dataProps={{ ...props }} />
    </>
  );
}
