import React, { useState } from "react";
import CartCounter from "../CartCounter";
import "./header.css";
import SideBar from "../SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Header() {
  const [open, setOpen] = useState(false);

  function toggleSideBar() {
    setOpen(!open);
  }

  return (
    <>
      <div className="header">
        <div className="header-sidebar">
          <div className="header-hamburger" onClick={() => toggleSideBar()}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className="header-title">
          <Link className="link" to="/">
            <span>Home</span>
          </Link>
        </div>

        <div className="header-counter">
          <CartCounter />
        </div>
      </div>
      <SideBar open={open} />
    </>
  );
}
