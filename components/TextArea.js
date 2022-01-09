import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import Clipboard from "./icons/Clipboard";
import SelectAll from "./icons/SelectAll";
import Reset from "./icons/Reset";
import AddIcon from "./icons/AddIcon";
import LanguageIcon from "./icons/LanguageIcon";

const TextArea = () => {
  const {
    value,
    setValue,
    handleTyping,
    handleSelect,
    InputRef,
    t,
    i18n,
    addTask,
  } = useContext(MyContext);

  return (
    <>
      <textarea
        style={{
          width: "100%",
          height: 200,
          direction: `${t("direction")}`,
        }}
        value={value}
        onChange={handleTyping}
        placeholder={t("placeholder")}
        ref={InputRef}
        name="value"
        type="text"
      ></textarea>
      {i18n.language === "en" ? (
        <button
          onClick={() => {
            i18n.changeLanguage("ar");
          }}
          style={{ margin: "10px 0 10px 0" }}
        >
          <span>
            <LanguageIcon iconWidth={20} /> Arabic
          </span>
        </button>
      ) : (
        <button
          onClick={() => {
            i18n.changeLanguage("en");
          }}
          style={{ margin: "10px 0 10px 0" }}
        >
          <span>
            <LanguageIcon iconWidth={20} /> English
          </span>
        </button>
      )}
      <div>
        <button
          tabIndex="0"
          onClick={() => navigator.clipboard.writeText(value)}
          style={{ margin: `${t("margin")}` }}
        >
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
        <button onClick={() => setValue("")}>
          <span>
            <Reset iconWidth={20} />
            {t("reset")}
          </span>
        </button>
      </div>
    </>
  );
};

export default TextArea;
