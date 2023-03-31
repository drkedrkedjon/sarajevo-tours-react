import React from "react";
import CardHome from "../components/CardHome";
import SubSelect from "../components/SubSelect";
import data from "../data";

export default function Ski() {
  const props = {
    title: "Chose your mountain:",
    to1: "?type=jahorina",
    to2: "?type=bjelasnica",
    btn1: "Jahorina",
    btn2: "Bjelasnica",
  };

  const html = data.map((card) => {
    const { id, title, imgUrl, summary } = card;
    return <CardHome key={id} card={{ title, imgUrl, summary }} />;
  });

  return (
    <>
      <SubSelect dataProps={{ ...props }} />
      <div className="home-cards-grid">{html}</div>;
    </>
  );
}
