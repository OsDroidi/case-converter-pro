import { useContext } from "react";
import { MyContext } from "../../context/Context";
import RippleButton from "../RippleButton";

const DuplicatedWords = () => {
  const { value, setValue, t } = useContext(MyContext);

  const removeDuplicatedWords = () => {
    setValue([...new Set(value.split(" "))].join(" "));
  };

  return (
    <>
      <RippleButton
        text={`${t("duplicatedWords")}`}
        onClick={removeDuplicatedWords}
      ></RippleButton>
    </>
  );
};

export default DuplicatedWords;
