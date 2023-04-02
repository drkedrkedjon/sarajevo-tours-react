import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import HeroProduct from "../components/HeroProduct";

export default function ProductDetails() {
  const params = useParams();
  const findProduct = data.find(
    (product) => product.id.toString() === params.id
  );
  const {
    price,
    hero: { title, text },
  } = findProduct;

  return (
    <>
      <HeroProduct price={price} text={text} title={title} />
      <h1>Product Details</h1>;
    </>
  );
}
