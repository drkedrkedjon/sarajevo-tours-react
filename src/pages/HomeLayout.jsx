import React from "React";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div>
      <h1>Sasa</h1>
      <Outlet />
    </div>
  );
}
