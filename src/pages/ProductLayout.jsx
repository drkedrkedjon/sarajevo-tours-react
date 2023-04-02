import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ProductLayout() {
  return (
    <div className="background-color-home sasa">
      <div className="home-layout home-layout-pink">
        <Header color="color-white" />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
