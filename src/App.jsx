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
import LogIn from "./pages/LogIn";
import About from "./pages/About";
import AuthRequired from "./pages/admin/AuthRequired";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Income from "./pages/admin/Income";

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

        <Route element={<AuthRequired />}>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="income" element={<Income />} />
          </Route>
        </Route>
        <Route path="login" element={<LogIn />} />

        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
