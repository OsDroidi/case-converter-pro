import { useContext } from "react";
import { MyContext } from "../../context/Context";
import RippleButton from "../RippleButton";

const LowerCase = () => {
  const { value, setValue, t } = useContext(MyContext);

  const lowerCaseButton = () => {
    setValue(value.toLowerCase());
  };
  return (
    <>
      <RippleButton
        text={`${t("lowercase")}`}
        onClick={lowerCaseButton}
      ></RippleButton>
    </>
  );
};

export default LowerCase;
