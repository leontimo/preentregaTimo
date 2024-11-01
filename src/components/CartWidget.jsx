import React from "react";
import cart from "../assets/cartjpg.jpeg";

const CartWidget = ({ itemCount }) => {
  return (
    <>
      <img
        src={cart}
        alt="cart"
        style={{ width: "30px", height: "30px", cursor: "pointer" }}
      />
      {itemCount > 0 && <span>{itemCount}</span>}
    </>
  );
};

export default CartWidget;
