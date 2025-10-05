// src/components/Cart.jsx
import React from 'react';

const Cart = ({ cart = [] }) => {
  return (
    <ul className="cart">
      {cart.map((item) => (
        <li key={item.id}>{item.id}</li>
      ))}
    </ul>
  );
};

export default Cart;
