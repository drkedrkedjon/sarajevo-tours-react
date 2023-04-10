import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import SubSelect from "../components/SubSelect";
import CardProduct from "../components/CardProduct";
import { ProductContext } from "../api/DataContext";

export default function Bike() {
  const props = {
    title: "Choose the length of adventure:",
    to1: "single",
    to2: "multi",
    btn1: "Single day",
    btn2: "Multi day",
  };

  const data = useContext(ProductContext);
  console.log(data);

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const dataFilter = data.filter((product) => {
    if (!typeFilter && product.category === "bike") {
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
