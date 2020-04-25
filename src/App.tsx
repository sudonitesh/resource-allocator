import React from "react";
import PersonnelAssign from "./components/PersonnelAssign";

import "./App.scss";

function App() {
  return (
    <div className="root">
      <div className="nav">
        <header className="header">
          <a className="logo" href="/"  >
            Total Cloud
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="/" className="link link-theme link-arrow">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="link link-theme link-arrow">
                About
              </a>
            </li>
            <li>
              <a href="/" className="link link-theme link-arrow">
                Features
              </a>
            </li>
            <li>
              <a href="/" className="link link-theme link-arrow">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="link link-theme link-arrow">
                Screenshot
              </a>
            </li>
            <li>
              <a href="/" className="link link-theme link-arrow">
                Contact
              </a>
            </li>
          </ul>
        </header>
        <div className="description">Resource allocator</div>
      </div>
      <div className="contents">
        <PersonnelAssign />
      </div>
    </div>
  );
}

export default App;
