import React from "react";
import ArabicAccent from "../convert/ArabicAccent";
import CamelCase from "../convert/CamelCase";
import CapitalizedCase from "../convert/CapitalizedCase";
import LowerCase from "../convert/LowerCase";
import RemoveEmoji from "../convert/RemoveEmoji";
import RemoveUrl from "../convert/RemoveUrl";
import SnakeCase from "../convert/SnakeCase";
import UpperCase from "../convert/UpperCase";
import DuplicatedWords from "../convert/DuplicatedWords";
import Slug from "../convert/Slug";
import ConvertNumbers from "../convert/ConvertNumbers";
import FixNumbers from "../convert/FixNumbers";

const All = () => {
  return (
    <>
      <UpperCase />
      <LowerCase />
      <CapitalizedCase />
      <ArabicAccent />
      <RemoveUrl />
      <RemoveEmoji />
      <ConvertNumbers />
      <FixNumbers />
      <CamelCase />
      <DuplicatedWords />
      <SnakeCase />
      <Slug />
    </>
  );
};

export default All;
