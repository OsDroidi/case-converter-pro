import React from "react";
import ArabicAccent from "../convert/ArabicAccent";
import CapitalizedCase from "../convert/CapitalizedCase";
import LowerCase from "../convert/LowerCase";
import RemoveEmoji from "../convert/RemoveEmoji";
import RemoveUrl from "../convert/RemoveUrl";
import UpperCase from "../convert/UpperCase";
import ConvertNumbers from "../convert/ConvertNumbers";
import FixNumbers from "../convert/FixNumbers";

function Text() {
  return (
    <>
      <UpperCase />
      <LowerCase />
      <CapitalizedCase />
      <ArabicAccent />
      <RemoveUrl />
      <ConvertNumbers />
      <FixNumbers />
      <RemoveEmoji />
    </>
  );
}

export default Text;
