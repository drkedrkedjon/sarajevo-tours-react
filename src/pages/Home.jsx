import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Outlet />
    </>
  );
}
