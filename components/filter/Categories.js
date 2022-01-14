import React, { useContext } from "react";
import { MyContext } from "../../context/Context";
import RippleButton from "../RippleButton";

const Categories = () => {
  const { t, handleShowAll, handleShowText, handleShowProgramming, supportUs } =
    useContext(MyContext);
  return (
    <div className="scrollmenu">
      <RippleButton text={t("all")} onClick={handleShowAll}></RippleButton>
      <RippleButton text={t("text")} onClick={handleShowText}></RippleButton>
      <RippleButton
        text={t("coding")}
        onClick={handleShowProgramming}
      ></RippleButton>
      <RippleButton text={t("more")} onClick={supportUs}></RippleButton>
    </div>
  );
};

export default Categories;
