import React from "react";
import logo from "./camping.png";

function Header() {
  return (
    <header>
      <div className="branding">
        <img alt="logo" src={logo} />
      </div>
      <div className="page-details">
        <div className="title">Retkeilytiedotteet</div>
      </div>
      <div className="settings">
        <div className="menu-button profile">
          <i className="material-icons">person</i>
        </div>
      </div>
    </header>
  );
}

export default Header;
