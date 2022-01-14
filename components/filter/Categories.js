import React, { useContext } from "react";
import { MyContext } from "../../context/Context";

const Categories = () => {
  const { t, handleShowAll, handleShowText, handleShowProgramming, supportUs } =
    useContext(MyContext);
  return (
    <div className="scrollmenu">
      <button onClick={handleShowAll}>{t("all")}</button>
      <button onClick={handleShowText}>{t("text")}</button>
      <button onClick={handleShowProgramming}>{t("coding")}</button>
      <button onClick={supportUs}>{t("more")}</button>
    </div>
  );
};

export default Categories;
