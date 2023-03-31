import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home";
import HomeCards from "./pages/HomeCards";
import Ski from "./pages/Ski";
import Bike from "./pages/Bike";
import Walk from "./pages/Walk";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeCards />} />
            <Route path="skiing" element={<Ski />} />
            <Route path="biking" element={<Bike />} />
            <Route path="walking" element={<Walk />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
