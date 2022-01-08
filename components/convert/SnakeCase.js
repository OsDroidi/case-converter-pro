import { useContext } from "react";
import { MyContext } from "../../context/Context";

const SnakeCase = () => {
  const { value, setValue } = useContext(MyContext);
  
  const snakeCaseButton = () => {
    setValue(
      value
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map((x) => x.toLowerCase())
        .join("_")
    );
  };
  return (
    <>
      <button onClick={snakeCaseButton}>snake_case</button>
    </>
  );
};

export default SnakeCase;
