import { useContext } from "react";
import { MyContext } from "../../context/Context";

const RemoveUrl = () => {
  const { value, setValue, t } = useContext(MyContext);

  const removeUrlButton = () => {
    setValue(value.replace(/(?:https?|ftp):\/\/[\n\S]+/g, ""));
  };

  return (
    <>
      <button onClick={removeUrlButton}>{t("removeUrl")}</button>
    </>
  );
};

export default RemoveUrl;
