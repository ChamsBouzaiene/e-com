import React from "react";
import "./order.css";

export default function order() {
  return (
    <div>
      <h2>Order</h2>
      <h3>Delivery Methods</h3>
      <div className="delivery-options">
        <span>1 - Express Shipping ></span>
        <span>2 - E-Com Prime ></span>
        <span>3 - Delivery By Mail ></span>
      </div>
    </div>
  );
}
