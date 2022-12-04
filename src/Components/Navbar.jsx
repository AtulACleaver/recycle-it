import React from "react";
import "../css/Main.css";
import "../css/Navbar.css";
import logo from "../img/logo.png";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            rel="noreferrer"
            href="/"
          >
            <img
              src={logo}
              alt="Logo"
              className="d-inline-block align-text-top navbar-logo"
            />
            Recycle It
          </a>

          <div className="d-flex">
            <ul className="nav-list">
              <li className="nav-list-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/AtulACleaver"
                  className="nav-list-item-link"
                >
                  Twitter
                </a>
              </li>
              <li className="nav-list-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://recycle-it.typedream.app/#about-me"
                  className="nav-list-item-link"
                >
                  About Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
