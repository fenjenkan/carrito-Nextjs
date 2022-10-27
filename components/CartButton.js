import React from "react";
import { useAppContext } from "./stateWrapper";
import styles from "../styles/cartButton.module.css";
const CartButton = ({ item }) => {
  const cart = useAppContext();
  function handleClick() {
    cart.addItemToCart(item);
    cart.openCart();
  }
  return (
    <button className={styles.button} onClick={handleClick}>
      Add to Cart
    </button>
  );
};

export default CartButton;
