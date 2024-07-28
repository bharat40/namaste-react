import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1 className="text-center">{cartItems.length} items in your cart</h1>
    </div>
  );
};

export default Cart;
