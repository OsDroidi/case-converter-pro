import { useContext } from "react";
import { MyContext } from "../../context/Context";
import RippleButton from "../RippleButton";

const UpperCase = () => {
  const { value, setValue, t } = useContext(MyContext);

  const upperCaseButton = () => {
    setValue(value.toUpperCase());
  };
  return (
    <>
      <RippleButton
        text={`${t("uppercase")}`}
        onClick={upperCaseButton}
      ></RippleButton>
    </>
  );
};

export default UpperCase;
