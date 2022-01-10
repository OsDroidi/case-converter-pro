import { useContext } from "react";
import { MyContext } from "../context/Context";
import RippleButton from "./RippleButton";

const Language = () => {
  const { i18n } = useContext(MyContext);

  return (
    <>
      {i18n.language === "en" ? (
        <RippleButton
          text="Arabic"
          onClick={() => {
            i18n.changeLanguage("ar");
          }}
          style={{ margin: "10px 0 10px 0" }}
          component="LanguageIcon"
        ></RippleButton>
      ) : (
        <RippleButton
          text="English"
          onClick={() => {
            i18n.changeLanguage("en");
          }}
          style={{ margin: "10px 0 10px 0" }}
          component="LanguageIcon"
        ></RippleButton>
      )}
    </>
  );
};

export default Language;
