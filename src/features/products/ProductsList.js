import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./products.css";
import { LoadProducts } from "./products";
import { useSelector, useDispatch } from "react-redux";

function ProductsList() {
  const [page, setPage] = useState(1);
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadProducts(page));
  });
  return (
    <>
      <div className="products-container">
        <div className="products-grid">
          {products.map((prod, key) => (
            <Product key={key} prod={prod} />
          ))}
        </div>
        <div>
          <input
            type="button"
            value="1"
            onClick={() => dispatch(LoadProducts(1))}
          />
          <input
            type="button"
            value="2"
            onClick={() => dispatch(LoadProducts(2))}
          />
        </div>
      </div>
    </>
  );
}

export default ProductsList;
