import React, { useContext } from "react";
import { ShoppingContext } from "../api/ShopCartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cart() {
  const [shopCart, setShopCart] = useContext(ShoppingContext);
  console.log(shopCart);
  return (
    <div className="background-color-home">
      <div className="home-layout home-layout-blue">
        <Header color="color-orange" />
        <div className="cart-container">
          <h1 className="ff-title color-black fs-700">Shopping cart</h1>
          <p>Items in your cart:</p>
          <ol className="cart-list">
            <li className="cart-list-item">
              <div className="title-summary">
                <h3>Title</h3>
                <p>Summary</p>
              </div>
              <p className="cart-price">25$</p>
            </li>
            <li className="cart-list-item">
              <div className="title-summary">
                <h3>Title</h3>
                <p>Summary</p>
              </div>
              <p className="cart-price">25$</p>
            </li>
            <li className="cart-list-item">
              <div className="title-summary">
                <h3>Title</h3>
                <p>Summary</p>
              </div>
              <p className="cart-price">25$</p>
            </li>
          </ol>
        </div>
        <Footer />
      </div>
    </div>
  );
}
