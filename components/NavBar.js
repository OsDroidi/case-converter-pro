import React from "react";
import { Toggle } from "./Toggle";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <p className="pretty-text-underline">About</p>
        <p className="pretty-text-underline">Contact</p>
        <p className="pretty-text-underline">Learn</p>
      </div>
      <Toggle />
    </>
  );
};

export default NavBar;
