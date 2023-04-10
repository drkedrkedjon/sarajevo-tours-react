/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";
import { getProducts } from "./firebase";

const ProductContext = createContext();

function DataContext({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function getData() {
      const datos = await getProducts();
      setData(datos);
    })();
  }, []);

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
}

export { ProductContext, DataContext };
