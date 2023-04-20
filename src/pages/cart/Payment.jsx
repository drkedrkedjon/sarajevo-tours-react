import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../../api/ShopCartContext";

export default function Payment() {
  const [, setShopCart] = useContext(ShoppingContext);
  const navegate = useNavigate();
  useEffect(() => {
    setShopCart([]);
    setTimeout(() => {
      navegate("/about");
    }, 10000);
  }, []);

  return (
    <div className="cart-container box-shadow-blue flow">
      <h2 className="ff-title color-black fs-700">Hi there!</h2>
      <p>
        This is not real app and is made to practice React programing. Instead
        of connecting to payment processing platform like Stripe, etc...
      </p>
      <p>
        ... you will be redirected to about page where you can read all the
        details about this proyect.
      </p>
    </div>
  );
}
