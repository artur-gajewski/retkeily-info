import React from "react";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <div className="navLink">
            <i className="material-icons">home</i>
            <span>Etusivu</span>
          </div>
        </li>
        <li>
          <div className="navLink">
            <i className="material-icons">assignment</i>
            <span>Tiedotteet</span>
          </div>
        </li>
        <li>
          <div className="navLink">
            <i className="material-icons">location_on</i>
            <span>Ilmoita sijaintisi</span>
          </div>
        </li>
        <li>
          <div className="navLink">
            <i className="material-icons">event_available</i>
            <span>Tapahtumat</span>
          </div>
        </li>
        <li>
          <div className="navLink">
            <i className="material-icons">people</i>
            <span>Kaverilista</span>
          </div>
        </li>
        <li>
          <div className="navLink">
            <i className="material-icons">bookmark</i>
            <span>Suosikit</span>
          </div>
        </li>
        <li>
          <div className="navLink">
            <i className="material-icons">person</i>
            <span>Kirjaudu sisään</span>
          </div>
        </li>
        <li>
          <div className="navLink">
            <i className="material-icons">logout</i>
            <span>Kirjaudu ulos</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
