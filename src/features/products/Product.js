import React from "react";
import { Link } from "react-router-dom";

function Product({ prod: { name, color, year, id } }) {
  return (
    <div className="product-card" style={{ background: color }}>
      <span>{name}</span>

      <span>{year}</span>
      <Link to={`product/${id}`}>Show</Link>
    </div>
  );
}

export default Product;
