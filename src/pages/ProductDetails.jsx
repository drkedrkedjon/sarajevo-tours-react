import React, { useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroProduct price={price} text={heroText} title={heroTitle} />
      <article className="details-container color-white">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <img src={imgUrl} alt={heroText} />
        <div className="parafo flow">{description}</div>
        <img src={imgUrl2} alt={heroText} />
      </article>
    </>
  );
}
