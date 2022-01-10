import { useContext } from "react";
import { MyContext } from "../context/Context";
import RippleButton from "./RippleButton";

const QuickIcons = () => {
  const { setValue, handleSelect, t, addTask, copy, copyClipboard } =
    useContext(MyContext);

  return (
    <>
      <RippleButton
        text={`${t("clipboard")}`}
        onClick={copyClipboard}
        style={{ margin: `${t("margin")}` }}
        component="Clipboard"
      ></RippleButton>
      <RippleButton
        text={`${t("save")}`}
        onClick={addTask}
        style={{ margin: `${t("margin")}` }}
        component="AddIcon"
      ></RippleButton>
      <RippleButton
        text={`${t("selectAll")}`}
        onClick={handleSelect}
        style={{ margin: `${t("margin")}` }}
        component="SelectAll"
      ></RippleButton>
      <RippleButton
        text={`${t("reset")}`}
        onClick={() => setValue("")}
        component="Reset"
      ></RippleButton>
      <p>{copy}</p>
    </>
  );
};

export default QuickIcons;
