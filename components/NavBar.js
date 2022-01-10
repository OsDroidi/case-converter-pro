import React from "react";
import { Toggle } from "./Toggle";

const NavBar = () => {
  return (
    <>
      <ul className="nav-bar">
        <li className="pretty-text-underline">
          <a href="#">About</a>
        </li>
        <li className="pretty-text-underline">
          <a href="#">Contact</a>
        </li>
        <li className="pretty-text-underline">
          <a href="#">Learn</a>
        </li>
      </ul>
      <Toggle />
    </>
  );
};

export default NavBar;
