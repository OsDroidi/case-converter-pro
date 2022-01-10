import React from "react";
import { Toggle } from "./Toggle";
import { useContext } from "react";
import { MyContext } from "../context/Context";

const NavBar = () => {
  const { t } = useContext(MyContext);
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
            <a href="#">{t("about")}</a>
          </li>
          <li>
            <a href="#">{t("learn")}</a>
          </li>
          <li>
            <a href="#">{t("contact")}</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
