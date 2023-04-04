import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "/css-styles.css";
import HomeLayout from "./pages/HomeLayout";
import HomeCards from "./pages/HomeCards";
import Ski from "./pages/Ski";
import Bike from "./pages/Bike";
import Walk from "./pages/Walk";
import ProductLayout from "./pages/ProductLayout";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomeCards />} />
          <Route path="skiing" element={<Ski />} />
          <Route path="biking" element={<Bike />} />
          <Route path="walking" element={<Walk />} />
        </Route>
        <Route path="products" element={<ProductLayout />}>
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
