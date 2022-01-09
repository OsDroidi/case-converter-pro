import { useContext } from "react";
import { MyContext } from "../context/Context";
import Clipboard from "./icons/Clipboard";
import SelectAll from "./icons/SelectAll";
import Reset from "./icons/Reset";

const TextArea = () => {
  const {
    value,
    setValue,
    handleTyping,
    handleSelect,
    InputRef,
    t,
    i18n,
    dark,
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
      ></textarea>
      {i18n.language === "en" ? (
        <button
          onClick={() => {
            i18n.changeLanguage("ar");
          }}
          style={{ margin: "10px 0 10px 0" }}
        >
          AR
        </button>
      ) : (
        <button
          onClick={() => {
            i18n.changeLanguage("en");
          }}
          style={{ margin: "10px 0 10px 0" }}
        >
          EN
        </button>
      )}
      <div>
        <button
          onClick={() => navigator.clipboard.writeText(value)}
          style={{ marginRight: `${t("marginRight")}` }}
        >
          <span>
            <Clipboard iconWidth={20} />
            {t("clipboard")}
          </span>
        </button>
        <button onClick={handleSelect} style={{ marginRight: "10px" }}>
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
