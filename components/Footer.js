import React from "react";

const Footer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <p>
        &copy; {new Date().getFullYear()}, Build with{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js{" "}
        </a>
        and{" "}
        <a href="https://vercel.com/" target="_blank" rel="noreferrer">
          Vercel
        </a>{" "}
        by{" "}
        <a href="https://github.com/OsDroidi" target="_blank" rel="noreferrer">
          Osama Saeed
        </a>
        <br />
      </p>
    </div>
  );
};

export default Footer;
