import React from "react";
import ColorPicker from "../ColorPicker";
import "./sidebar.css";

export default function SideBar({ open }) {
  function showSideBar(open) {
    return open ? "sidebar" : "no-sidebar";
  }

  return (
    <div className={showSideBar(open)}>
      <div className="sidebar-title">
        <span>Shopping !</span>
      </div>
      <ColorPicker />
    </div>
  );
}
