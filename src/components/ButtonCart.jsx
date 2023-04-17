/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { ShoppingContext } from "../api/ShopCartContext";

export default function Button({ color, title, id }) {
  const [, setShopCart] = useContext(ShoppingContext);

  // desable state

  function handleShopCart(prodID) {
    setShopCart((oldCart) => [...oldCart, prodID]);
  }

  return (
    <button onClick={() => handleShopCart(id)} className={`btn btn-${color}`}>
      {title}
    </button>
  );
}
