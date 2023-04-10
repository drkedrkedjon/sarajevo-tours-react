import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import SubSelect from "../components/SubSelect";
import CardProduct from "../components/CardProduct";
import { ProductContext } from "../api/DataContext";

export default function Walk() {
  const props = {
    title: "Choose your curiosity:",
    to1: "food",
    to2: "history",
    btn1: "Food walks",
    btn2: "History walks",
  };

  const data = useContext(ProductContext);
  console.log(data);

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const dataFilter = data.filter((product) => {
    if (!typeFilter && product.category === "walk") {
      return product;
    } else if (typeFilter === product.type) {
      return product;
    }
  });

  const html = dataFilter.map((card) => {
    const { id, title, imgUrl, summary } = card;
    return <CardProduct key={id} card={{ id, title, imgUrl, summary }} />;
  });

  return (
    <>
      <SubSelect searchType={typeFilter} dataProps={{ ...props }} />
      <div className="home-cards-grid">{html}</div>;
    </>
  );
}
