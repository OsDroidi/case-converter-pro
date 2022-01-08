import { useContext } from "react";
import { MyContext } from "../../context/Context";

const CapitalizedCase = () => {
  const { value, setValue, t } = useContext(MyContext);

  const capitalizedCaseButton = () => {
    setValue(
      value.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
      })
    );
  };
  return (
    <>
      <button onClick={capitalizedCaseButton}>{t("capitalizedCase")}</button>
    </>
  );
};

export default CapitalizedCase;
