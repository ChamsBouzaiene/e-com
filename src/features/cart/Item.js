import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./cart";

export default function Item({ item: { name, color, qte, id } }) {
  const dispatch = useDispatch();
  return (
    <div className="item">
      <span className="col"> name : {name}</span>
      <span className="col"> color : {color} </span>
      <span className="col"> qte : {qte} </span>
      <span className="delete" onClick={() => dispatch(removeFromCart(id))}>
        delete
      </span>
    </div>
  );
}
