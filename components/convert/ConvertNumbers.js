import { useContext } from "react";
import { MyContext } from "../../context/Context";
import RippleButton from "../RippleButton";

const ConvertNumbers = () => {
  const { value, setValue, t } = useContext(MyContext);

  let persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ];
  let arabicNumbers = [
    /٠/g,
    /١/g,
    /٢/g,
    /٣/g,
    /٤/g,
    /٥/g,
    /٦/g,
    /٧/g,
    /٨/g,
    /٩/g,
  ];
  const FixNumbers = (str) => {
    if (typeof str === "string") {
      for (var i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
    }
    return str;
  };
  const convertNumbersButton = () => {
    setValue(FixNumbers(value));
  };
  return (
    <>
      <RippleButton
        text={`${t("arabicToEnglish")}`}
        onClick={convertNumbersButton}
      ></RippleButton>
    </>
  );
};

export default ConvertNumbers;
