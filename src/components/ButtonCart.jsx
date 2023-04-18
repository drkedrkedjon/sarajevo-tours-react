/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { ShoppingContext } from "../api/ShopCartContext";

export default function Button({ color, title, id }) {
  const [shopCart, setShopCart] = useContext(ShoppingContext);
  const [isDisabled, setIsDisabled] = useState(
    shopCart.some((code) => code === id)
  );

  function handleShopCart(prodID) {
    setShopCart((oldCart) => [...oldCart, prodID]);
    setIsDisabled(true);
  }

  return (
    <button
      disabled={isDisabled}
      onClick={() => handleShopCart(id)}
      className={`btn btn-${color}`}
    >
      {isDisabled ? "In cart..." : title}
    </button>
  );
}
