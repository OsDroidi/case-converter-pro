import { useContext } from "react";
import { MyContext } from "../../context/Context";
import RippleButton from "../RippleButton";

const CamelCase = () => {
  const { value, setValue } = useContext(MyContext);

  const camelCaseButton = () => {
    setValue(
      value.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      })
    );
  };
  return (
    <>
      <RippleButton text="camelCase" onClick={camelCaseButton}></RippleButton>
    </>
  );
};

export default CamelCase;
