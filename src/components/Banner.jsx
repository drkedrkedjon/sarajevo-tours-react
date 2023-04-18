/* eslint-disable react/prop-types */
import React from "react";
import ButtonCart from "./ButtonCart";

export default function Banner({ bannerType }) {
  // eslint-disable-next-line no-unused-vars
  const { color, title, description, imgUrl, productId } = bannerType;
  return (
    <div className="banner-container">
      <aside className={`banner-aside banner-aside-${color}`}>
        <div className="banner-aside-text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div
          className="btn-img-container"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <ButtonCart id={productId} color="green" title="Add to cart" />
        </div>
      </aside>
    </div>
  );
}
