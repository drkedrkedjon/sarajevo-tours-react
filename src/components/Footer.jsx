import React from "react";
import NavBtn from "../components/NavBtn";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const adminLocation = location.pathname === "/admin" ? false : true;
  console.log(adminLocation);
  return (
    <div className="footer">
      {adminLocation && (
        <NavBtn color="pink" title="Admin panel" pathTo="/admin" />
      )}
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
