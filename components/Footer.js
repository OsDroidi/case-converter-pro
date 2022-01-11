import React from "react";
import { useContext } from "react";
import { MyContext } from "../context/Context";

const Footer = () => {
  const { t } = useContext(MyContext);
  return (
    <div style={{ textAlign: "center" }}>
      <p>
        &copy; {new Date().getFullYear()} {t("footer1")}{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js{" "}
        </a>
        {t("footer2")}{" "}
        <a href="https://vercel.com/" target="_blank" rel="noreferrer">
          Vercel
        </a>{" "}
        {t("footer3")}{" "}
        <a href="https://github.com/OsDroidi" target="_blank" rel="noreferrer">
          {t("footer4")}
        </a>
        <br />
      </p>
    </div>
  );
};

export default Footer;
