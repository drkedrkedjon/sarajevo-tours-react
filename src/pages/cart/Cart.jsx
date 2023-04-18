import React, { useContext, useEffect, useRef, useState } from "react";
import { ShoppingContext } from "../../api/ShopCartContext";
import { ProductContext } from "../../api/DataContext";

import Button from "../../components/Button";

export default function Cart() {
  const [shopCart, setShopCart] = useContext(ShoppingContext);
  const data = useContext(ProductContext);

  function handleRemoveItemFromCart(id) {
    const removeItem = shopCart.filter((item) => item !== id);
    setShopCart(removeItem);
  }

  // Formatear numero a EUR currency
  const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  });

  // Find product whose ID is already in cart
  const findProductsInCart = shopCart.map((id) => {
    const itemCart = data.find((item) => item.id === id);
    return itemCart;
  });

  // Map over found products in cart and return list item with filled data
  const html = findProductsInCart.map((product) => (
    <li key={Math.random()} className="cart-list-item">
      <div className="title-summary">
        <h3>{product?.title}</h3>
        <p>{product?.summary}</p>
      </div>
      <div className="cart-price-container">
        <button
          onClick={() => handleRemoveItemFromCart(product?.id)}
          className="cart-small-btn cart-sb-red"
        >
          X
        </button>
        <p className="cart-price">{formatter.format(product?.price)}</p>
      </div>
    </li>
  ));

  // Map over found products in cart and return array of prices and sum them all
  const subTotal = findProductsInCart
    .map((product) => {
      return Number(product?.price);
    })
    .reduce((acc, price) => acc + price, 0);
  // Take the subTotal and calculate taxes of 21%
  const taxDue = subTotal * (21 / 100);
  // Sum TOTAL
  const total = subTotal + taxDue;

  // Handle promo codes
  const [promoCode, setPromoCode] = useState("");
  const inputPromoRef = useRef();

  function handlePromoCode() {
    setPromoCode(inputPromoRef.current.value);
  }

  // Handle disabled state of NEXT page button and save shopCart in localStorage
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    setIsDisabled(shopCart.length === 0);
    localStorage.setItem("sarajevoToursCart", JSON.stringify(shopCart));
  }, [shopCart]);

  return (
    <div className="cart-container box-shadow-blue">
      <h2 className="ff-title color-black fs-700">Shopping cart</h2>
      <p>Items in your cart:</p>
      <ol className="cart-list">{html}</ol>
      <ol>
        <li className="cart-list-item">
          <p>Subtotal</p>
          <p>{formatter.format(subTotal)}</p>
        </li>
        <li className="cart-list-item">
          <p>Promo code</p>
          {!promoCode ? (
            <div className="cart-price-container">
              <button
                onClick={handlePromoCode}
                className="cart-small-btn cart-sb-green"
              >
                Add code
              </button>
              <input
                ref={inputPromoRef}
                className="cart-input"
                type="text"
                placeholder="Code here"
              />
            </div>
          ) : (
            <p>Code not found!</p>
          )}
        </li>
        <li className="cart-list-item">
          <p>Tax 21%</p>
          <p>{formatter.format(taxDue)}</p>
        </li>
        <li className="cart-list-item cart-total">
          <h3>TOTAL</h3>
          <p>{formatter.format(total)}</p>
        </li>
      </ol>
      <Button
        isBtnDisabled={isDisabled}
        color="green"
        title={isDisabled ? "Cart is empty" : "To payment..."}
      />
    </div>
  );
}
