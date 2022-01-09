import { useContext } from "react";
import { MyContext } from "../context/Context";
import LanguageIcon from "./icons/LanguageIcon";

const Language = () => {
  const { i18n } = useContext(MyContext);

  return (
    <>
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
    </>
  );
};

export default Language;
