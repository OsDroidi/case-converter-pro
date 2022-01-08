import { useContext } from "react";
import { MyContext } from "../../context/Context";

const DuplicatedWords = () => {
  const { value, setValue, t } = useContext(MyContext);

  const removeDuplicatedWords = () => {
    setValue([...new Set(value.split(" "))].join(" "));
  };

  return (
    <>
      <button onClick={removeDuplicatedWords}>{t("duplicatedWords")}</button>
    </>
  );
};

export default DuplicatedWords;
