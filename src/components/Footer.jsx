import React from "react";
import NavBtn from "../components/NavBtn";

export default function Footer() {
  return (
    <div className="footer">
      <NavBtn color="pink" title="Admin panel" pathTo="/admin" />
      <div>
        <h3 className="ff-title fs-700 color-white">
          Made in 2023 by Cubi y Boni
        </h3>
        <p className="fs-300">
          We are looking for a junior web developer employment opportunity...
        </p>
      </div>
    </div>
  );
}
