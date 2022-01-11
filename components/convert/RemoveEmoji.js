import { useContext } from "react";
import { MyContext } from "../../context/Context";
import RippleButton from "../RippleButton";

const RemoveEmoji = () => {
  const { value, setValue } = useContext(MyContext);

  const removeEmojiButton = () => {
    setValue(
      value.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
    );
  };
  return (
    <>
      <RippleButton text="🙄" onClick={removeEmojiButton}></RippleButton>
    </>
  );
};

export default RemoveEmoji;
