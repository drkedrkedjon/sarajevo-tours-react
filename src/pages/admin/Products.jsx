import React, { useContext } from "react";
import AdminCard from "./AdminCard";
import { ProductContext } from "../../api/DataContext";

export default function Products() {
  const dataArray = useContext(ProductContext);

  const html = dataArray.map((product) => (
    <AdminCard
      key={product.id}
      title={product.title}
      summary={product.summary}
    />
  ));

  return (
    <div className="products-container">
      <button className="btn btn-green">Add new item</button>
      <div>{html}</div>
    </div>
  );
}
