import { useContext } from "react";
import { MyContext } from "../../context/Context";
import RippleButton from "../RippleButton";

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
      <RippleButton
        text={`${t("capitalizedCase")}`}
        onClick={capitalizedCaseButton}
      ></RippleButton>
    </>
  );
};

export default CapitalizedCase;
