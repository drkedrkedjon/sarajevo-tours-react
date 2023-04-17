/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const ShoppingContext = createContext();

export function ShopCartContext({ children }) {
  const [shopCart, setShopCart] = useState([
    "E4Tk1dnWSnooj5W04y5X",
    "8pvJ4Uno2LA6LvL9Jrwf",
    "JOdPWQ8fNTvQWzqZrnJ3",
  ]);

  return (
    <ShoppingContext.Provider value={[shopCart, setShopCart]}>
      {children}
    </ShoppingContext.Provider>
  );
}
