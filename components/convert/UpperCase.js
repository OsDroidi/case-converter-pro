import { useContext } from "react";
import { MyContext } from "../../context/Context";

const UpperCase = () => {
  const { value, setValue, t } = useContext(MyContext);

  const upperCaseButton = () => {
    setValue(value.toUpperCase());
  };
  return (
    <>
      <button onClick={upperCaseButton}>{t("uppercase")}</button>
    </>
  );
};

export default UpperCase;
