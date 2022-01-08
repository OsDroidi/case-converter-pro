import { useContext } from "react";
import { MyContext } from "../../context/Context";

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
      <button onClick={slugButton}>slug</button>
    </>
  );
};

export default Slug;
