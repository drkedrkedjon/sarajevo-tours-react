import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import HeroProduct from "../components/HeroProduct";
import { ProductContext } from "../api/DataContext";

export default function ProductDetails() {
  const data = useContext(ProductContext);

  const params = useParams();
  const findProduct = data.find(
    (product) => product.id.toString() === params.id
  );

  const descriptionMD = findProduct?.description.replace(/\\n\\n/g, "\n\n");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categ = findProduct?.category;

  function backLink() {
    if (categ === "ski") {
      return "/skiing";
    } else if (categ === "bike") {
      return "/biking";
    } else if (categ === "walk") {
      return "/walking";
    } else {
      return "/";
    }
  }

  return (
    <>
      <HeroProduct
        price={findProduct?.price}
        text={findProduct?.hero.heroText}
        title={findProduct?.hero.heroTitle}
        id={findProduct?.id}
      />

      <article className="details-container color-white">
        <h1>{findProduct?.title}</h1>
        <h3>{findProduct?.subtitle}</h3>
        <img src={findProduct?.imgUrl} alt={findProduct?.hero.heroText} />
        <div className="parafo flow">
          <Link
            className="return-cat-link underline color-black"
            to={backLink()}
          >{`Back to ${findProduct?.category} category`}</Link>{" "}
          <ReactMarkdown>{descriptionMD}</ReactMarkdown>
        </div>
        <img src={findProduct?.imgUrl2} alt={findProduct?.hero.heroText} />
      </article>
    </>
  );
}
