import { useContext } from "react";
import { MyContext } from "../../context/Context";
import RippleButton from "../RippleButton";

const ConvertNumbers = () => {
  const { value, setValue, t } = useContext(MyContext);
  const FixNumbersEnglish = (str) => {
    let id = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return str.replace(/[0-9]/g, (w) => {
      return id[+w];
    });
  };
  const convertNumbersButton = () => {
    setValue(FixNumbersEnglish(value));
  };
  return (
    <>
      <RippleButton
        text={`${t("englishToArabic")}`}
        onClick={convertNumbersButton}
      ></RippleButton>
    </>
  );
};

export default ConvertNumbers;
