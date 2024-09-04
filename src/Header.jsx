import React from "react";
import "./App.css";

function Header() {
  return (
    <>
      <header>
        <h1>This is my contact list</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
