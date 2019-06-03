import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <div className="navLink">
              <i className="material-icons">home</i>
              <span>Etusivu</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/news">
            <div className="navLink">
              <i className="material-icons">assignment</i>
              <span>Tiedotteet</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/me">
            <div className="navLink">
              <i className="material-icons">location_on</i>
              <span>Ilmoita sijaintisi</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/events">
            <div className="navLink">
              <i className="material-icons">event_available</i>
              <span>Tapahtumat</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/friends">
            <div className="navLink">
              <i className="material-icons">people</i>
              <span>Kaverilista</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <div className="navLink">
              <i className="material-icons">bookmark</i>
              <span>Suosikit</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <div className="navLink">
              <i className="material-icons">person</i>
              <span>Kirjaudu sisään</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <div className="navLink">
              <i className="material-icons">logout</i>
              <span>Kirjaudu ulos</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
