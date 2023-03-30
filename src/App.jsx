import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home";
import HomeCards from "./pages/HomeCards";
import SkiLayout from "./pages/SkiLayout";
import BikeLayout from "./pages/BikeLayout";
import WalkLayout from "./pages/WalkLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeCards />} />
            {/* { NIDAR ??? } */}
            <Route path="skiing" element={<SkiLayout />} />
            <Route path="biking" element={<BikeLayout />} />
            <Route path="walking" element={<WalkLayout />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
