import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function ProductLayout() {
  return (
    <div className="background-color-home sasa">
      <div className="home-layout home-layout-pink">
        <Header color="color-white" />
        <Outlet />
        <Banner
          bannerType={{
            color: "blue",
            title: "50% Discount",
            productId: "yx6S5Xh1Z4ylEIDPWDpD",
            description:
              "ALL the GPS enabled ski guides. The accommodations, the slopes, two mountains COMBO, Jahorina & Bjelasnica!",
            imgUrl: "/assets/images/ski-card.jpg",
          }}
        />
        <Footer />
      </div>
    </div>
  );
}
