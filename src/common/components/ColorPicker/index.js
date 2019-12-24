import React from "react";
import COLORS from "../../data/colors";
import "./colorpicker.css";
import { filterByColor } from "../../../features/products/products";
import { useDispatch } from "react-redux";

export default function ColorPicker() {
  const dispatch = useDispatch();

  return (
    <div className="color-picker">
      Filter By Color :
      <br />
      {Object.keys(COLORS).map((color, key) => {
        return (
          <div
            className="color-pallet"
            key={key}
            style={{ background: COLORS[color] }}
            onClick={() => dispatch(filterByColor(COLORS[color]))}
          >
            {color}
          </div>
        );
      })}
    </div>
  );
}
