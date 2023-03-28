/* eslint-disable react/prop-types */
import React from "react";

export default function CardHome({ card }) {
  const { title, imgUrl, description } = card;
  return (
    <div className="home-card-container">
      <article className="home-card-article">
        <h3 className="ff-title color-white">{title}</h3>
        <img src={imgUrl} alt="Sasa" />
        <p>{description}</p>
      </article>
    </div>
  );
}
