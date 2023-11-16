import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex flex-wrap justify-center">
      {cartItems.map((item) => (
        <CartItem key={item?.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
