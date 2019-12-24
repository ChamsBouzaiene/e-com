import React from "react";
import Item from "./Item";
import "./cart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const items = useSelector(state => state.cart.items);

  return (
    <div>
      <h2>Cart : {items.length} products </h2>
      <div className="item-table">
        {items.map((item, key) => (
          <Item key={key} item={item} />
        ))}
      </div>

      <div className="order">
        <Link to="/order">
          <span>ORDER</span>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
