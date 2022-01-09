import React from "react";
import { Toggle } from "./Toggle";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Toggle />
      <h3 className="pretty-text-underline">About</h3>
      <h3 className="pretty-text-underline">Contact</h3>
      <h3 className="pretty-text-underline">Learn</h3>
    </div>
  );
};

export default NavBar;
