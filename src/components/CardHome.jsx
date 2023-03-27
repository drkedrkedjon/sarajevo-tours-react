/* eslint-disable react/prop-types */
import React from "react";

export default function CardHome({ card }) {
  const { title, imgUrl, description } = card;
  return (
    <div className="card-home">
      <h3>{title}</h3>
      <img src={imgUrl} alt="Sasa" />
      <p>{description}</p>
    </div>
  );
}
