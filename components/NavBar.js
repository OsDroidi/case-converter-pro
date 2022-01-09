import React from "react";
import { Toggle } from "./Toggle";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Toggle />
      <h2 className="pretty-text-underline">About</h2>
      <h2 className="pretty-text-underline">Contact</h2>
      <h2 className="pretty-text-underline">Learn</h2>
    </div>
  );
};

export default NavBar;
