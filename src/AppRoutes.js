import React from "react";
import { Route } from "react-router-dom";
import Products from "./features/products";
import Order from "./features/order";
import Cart from "./features/cart";

export default function AppRoutes() {
  return (
    <>
      <Route exact path="/" component={Products} />
      <Route path="/order" component={Order} />
      <Route path="/cart" component={Cart} />
    </>
  );
}
