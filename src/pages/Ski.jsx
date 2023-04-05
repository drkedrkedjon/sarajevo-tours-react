import React from "react";
import { useSearchParams } from "react-router-dom";
import CardHome from "../components/CardHome";
import SubSelect from "../components/SubSelect";
import data from "../data";

export default function Ski() {
  const props = {
    title: "Chose your mountain:",
    to1: "jahorina",
    to2: "bjelasnica",
    btn1: "Jahorina",
    btn2: "Bjelasnica",
  };

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const dataFilter = data.filter((product) => {
    if (!typeFilter && product.category === "ski") {
      return product;
    } else if (typeFilter === product.location.toLowerCase()) {
      return product;
    }
  });

  const html = dataFilter.map((card) => {
    const { id, title, imgUrl, summary } = card;
    return <CardHome key={id} card={{ id, title, imgUrl, summary }} />;
  });

  return (
    <>
      <SubSelect searchType={typeFilter} dataProps={{ ...props }} />
      <div className="home-cards-grid">{html}</div>;
    </>
  );
}
