import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./cartcounter.css";

export default function CartCounter() {
  const productCount = useSelector(state => state.cart.items.length);
  return (
    <>
      <Link to="/cart" className="link">
        <FontAwesomeIcon icon={faCartPlus} />
        <span class="prod-count">{productCount}</span>
      </Link>
    </>
  );
}
