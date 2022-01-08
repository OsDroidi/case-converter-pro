import { useContext } from "react";
import { MyContext } from "../../context/Context";

const ConvertNumbers = () => {
  const { value, setValue, t } = useContext(MyContext);
  const FixNumbersEnglish = (str) => {
    let id = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return str.replace(/[0-9]/g, (w) => {
      return id[+w];
    });
  };
  const FixNumbers = (str) => {
    if (typeof str === "string") {
      for (var i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
    }
    return str;
  };
  const convertNumbersButton = () => {
    setValue(FixNumbersEnglish(value));
  };
  return (
    <>
      <button onClick={convertNumbersButton}>{t("englishToArabic")}</button>
    </>
  );
};

export default ConvertNumbers;
