import { useContext } from "react";
import { MyContext } from "../../context/Context";
import RippleButton from "../RippleButton";

const RemoveUrl = () => {
  const { value, setValue, t } = useContext(MyContext);

  const removeUrlButton = () => {
    setValue(value.replace(/(?:https?|ftp):\/\/[\n\S]+/g, ""));
  };

  return (
    <>
      <RippleButton
        text={`${t("removeUrl")}`}
        onClick={removeUrlButton}
      ></RippleButton>
    </>
  );
};

export default RemoveUrl;
