import { useContext } from "react";
import { MyContext } from "../context/Context";
import Clipboard from "./icons/Clipboard";
import SelectAll from "./icons/SelectAll";
import Reset from "./icons/Reset";
import AddIcon from "./icons/AddIcon";
import RippleButton from "./RippleButton";

const QuickIcons = () => {
  const { setValue, handleSelect, t, addTask, copy, copyClipboard } =
    useContext(MyContext);

  return (
    <>
      <div>
        <button onClick={copyClipboard} style={{ margin: `${t("margin")}` }}>
          <span>
            <Clipboard iconWidth={20} />
            {t("clipboard")}
          </span>
        </button>

        <button onClick={addTask} style={{ margin: `${t("margin")}` }}>
          <span>
            <AddIcon iconWidth={20} />
            {t("save")}
          </span>
        </button>

        <button onClick={handleSelect} style={{ margin: `${t("margin")}` }}>
          <span>
            <SelectAll iconWidth={20} />
            {t("selectAll")}
          </span>
        </button>
        <RippleButton
          text={`${t("reset")}`}
          onClick={() => setValue("")}
          component="Reset"
        ></RippleButton>
        <p>{copy}</p>
      </div>
    </>
  );
};

export default QuickIcons;
