import React from "react";
import classes from './Cart.module.css'
export default function () {
  const CartItems = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {CartItems}
      <div>
        <span>Total Amount</span>
        <span>35.78</span>
      </div>
      <div>
        <button className={classes['button--alt']}>Close</button>
      <button className={classes.button}>Order</button>
      </div>
    </div>
  );
}
