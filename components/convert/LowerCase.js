import { useContext } from "react";
import { MyContext } from "../../context/Context";

const LowerCase = () => {
  const { value, setValue, t } = useContext(MyContext);

  const lowerCaseButton = () => {
    setValue(value.toLowerCase());
  };
  return (
    <>
      <button onClick={lowerCaseButton}>{t("lowercase")}</button>
    </>
  );
};

export default LowerCase;
