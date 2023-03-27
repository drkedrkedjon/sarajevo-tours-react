/* eslint-disable react/prop-types */
import React from "react";

export default function CardHome({ card }) {
  return (
    <div className="card-home">
      <h3>{card.title}</h3>
      <img src={card.imgUrl} alt="Sasa" />
      <p>{card.description}</p>
    </div>
  );
}
