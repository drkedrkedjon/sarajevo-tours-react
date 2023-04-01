import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home-layout">
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
}
