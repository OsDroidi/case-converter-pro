import { useContext } from "react";
import { MyContext } from "../../context/Context";
import RippleButton from "../RippleButton";

const SnakeCase = () => {
  const { value, setValue } = useContext(MyContext);

  const snakeCaseButton = () => {
    const strArr = value.split(" ");
    const snakeArr = strArr.reduce((acc, val) => {
      return acc.concat(val.toLowerCase());
    }, []);
    return setValue(snakeArr.join("_"));
  };
  return (
    <>
      <RippleButton text="snake_case" onClick={snakeCaseButton}></RippleButton>
    </>
  );
};

export default SnakeCase;
