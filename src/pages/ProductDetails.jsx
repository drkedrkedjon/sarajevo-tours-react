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
    title,
    subtitle,
    description,
    imgUrl,
    imgUrl2,
    price,
    hero: { heroTitle, heroText },
  } = findProduct;

  return (
    <>
      <HeroProduct price={price} text={heroText} title={heroTitle} />
      <article className="details-container color-white">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <img src={imgUrl} alt={heroText} />
        <p>{description}</p>
        <img src={imgUrl2} alt={heroText} />
      </article>
    </>
  );
}
