import React from "react";
import CardHomePage from "../components/CardHomePage";
import { getProducts, skiQuery, bikeQuery, walkQuery } from "../firebase";

export default function HomeCards() {
  getProducts(skiQuery);
  const dataCards = [
    {
      title: "Alpine Skiing and Snowboarding",
      url: "/skiing",
      imgUrl: "/assets/images/ski-card.jpg",
      description:
        "Enjoy Jahorina & Bjelasnica, two stunning olimpic mountains located just 25km from city center.",
    },
    {
      title: "Mountain biking +300km of roads ",
      url: "/biking",
      imgUrl: "/assets/images/bike-card.jpg",
      description:
        "More then 300km of scenic roads and pure nature on Bjelasnica and beyound for single/multi day adventures...",
    },
    {
      title: "Foods & sweets walkabouts",
      url: "/walking?type=food",
      imgUrl: "/assets/images/food-card.jpg",
      description:
        "Wanna taste Sarajevo? Get our tour and find what and where to eat. Prepare in advance, breakfast, lunch, dinner. And sweets.",
    },
    {
      title: "Visit all important  historic spots ",
      url: "/walking?type=history",
      imgUrl: "/assets/images/history-card.jpg",
      description:
        "Do not loose time searching for important spots, get our detailed guides with GPS navigation... ",
    },
  ];

  const html = dataCards.map((card) => {
    const { title, imgUrl, description, url } = card;
    return (
      <CardHomePage
        key={card.imgUrl}
        card={{ title, imgUrl, description, url }}
      />
    );
  });

  return <div className="home-cards-grid">{html}</div>;
}
