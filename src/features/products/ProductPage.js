import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoadProduct } from "./products";
import { addToCart } from "../../features/cart/cart";

import { useSelector, useDispatch } from "react-redux";

export default function ProductPage() {
  let { id } = useParams();

  const { name, year, color, pantone_value } = useSelector(
    state => state.products.product
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadProduct(id));
  });

  const [count, setCount] = useState(1);

  function incriment() {
    setCount(count + 1);
  }

  function dicriment() {
    if (count >= 2) {
      setCount(count - 1);
    }
  }

  return (
    <div className="product-overview">
      <div className="product">
        <div className="info">
          <h3>ID: {id}</h3>
          <h3>name: {name}</h3>
          <h3>year: {year}</h3>
          <h3>color: {color}</h3>
          <h3>pantone value: {pantone_value}</h3>
        </div>
        <div className="item-image" style={{ background: color }}>
          ITEM
        </div>
      </div>
      <div className="order-board">
        <div className="counter">
          <input type="button" value="+" onClick={() => incriment()} />
          <input type="text" value={count} />
          <input type="button" value="-" onClick={() => dicriment()} />
        </div>
        <div className="order">
          <input
            type="button"
            value="Add To Cart"
            onClick={() => dispatch(addToCart({ id, name, color, qte: count }))}
          />
        </div>
      </div>
    </div>
  );
}
