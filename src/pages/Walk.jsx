import React from "react";
import SubSelect from "../components/SubSelect";

export default function Walk() {
  const props = {
    title: "Choose your curiosity:",
    to1: "food-walking",
    to2: "history-walking",
    btn1: "Food walks",
    btn2: "History walks",
  };

  return (
    <>
      <SubSelect dataProps={{ ...props }} />
    </>
  );
}
