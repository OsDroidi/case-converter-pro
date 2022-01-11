import { useContext } from "react";
import { MyContext } from "../../context/Context";
import RippleButton from "../RippleButton";

const Slug = () => {
  const { value, setValue } = useContext(MyContext);

  const slugButton = () => {
    setValue(
      value
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-") // collapse dashes
    );
  };

  return (
    <>
      <RippleButton text="slug" onClick={slugButton}></RippleButton>
    </>
  );
};

export default Slug;
