import React from "react";
import { Toggle } from "./Toggle";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="main-nav">
          <li>
            <a href="#" className="logo">
              <Toggle />
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Learn</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
