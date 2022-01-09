import React from "react";
import { Toggle } from "./Toggle";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Toggle />
      <p className="pretty-text-underline">About</p>
      <p className="pretty-text-underline">Contact</p>
      <p className="pretty-text-underline">Learn</p>
    </div>
  );
};

export default NavBar;
