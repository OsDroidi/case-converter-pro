import { useContext } from "react";
import { MyContext } from "../../context/Context";
import RippleButton from "../RippleButton";

const ArabicAccent = () => {
  const { value, setValue, t } = useContext(MyContext);

  const removeArabicAccentButton = () => {
    setValue(
      value.replace(
        /([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g,
        ""
      )
    );
  };
  return (
    <>
      <RippleButton
        text={`${t("arabicAccent")}`}
        onClick={removeArabicAccentButton}
      ></RippleButton>
    </>
  );
};

export default ArabicAccent;
