import React from "react";
import CamelCase from "../convert/CamelCase";
import SnakeCase from "../convert/SnakeCase";
import DuplicatedWords from "../convert/DuplicatedWords";
import Slug from "../convert/Slug";

function Codeing() {
  return (
    <>
      <CamelCase />
      <DuplicatedWords />
      <SnakeCase />
      <Slug />
    </>
  );
}

export default Codeing;
