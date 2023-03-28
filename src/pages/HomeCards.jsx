import React from "react";
import CardHome from "../components/CardHome";

export default function HomeCards() {
  const dataCards = [
    {
      title: "Alpine Skiing and Snowboarding",
      imgUrl: "/assets/images/ski-card.jpg",
      description:
        "Enjoy Jahorina & Bjelasnica, two stunning olimpic mountains located just 25km from city center.",
    },
    {
      title: "Mountain biking +300km of roads ",
      imgUrl: "/assets/images/bike-card.jpg",
      description:
        "More then 300km of scenic roads and pure nature on Bjelasnica and beyound for single/multi day adventures...",
    },
    {
      title: "Foods & sweets walkabouts",
      imgUrl: "/assets/images/food-card.jpg",
      description:
        "Wanna taste Sarajevo? Get our tour and find what and where to eat. Prepare in advance, breakfast, lunch, dinner. And sweets.",
    },
    {
      title: "Visit all important  historic spots ",
      imgUrl: "/assets/images/history-card.jpg",
      description:
        "Do not loose time searching for important spots, get our detailed guides with GPS navigation... ",
    },
  ];

  const html = dataCards.map((card) => {
    return <CardHome key={card.imgUrl} card={{ ...card }} />;
  });

  return <div className="home-cards-grid">{html}</div>;
}
