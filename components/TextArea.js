import { useContext } from "react";
import { MyContext } from "../context/Context";

const TextArea = () => {
  const { value, handleTyping, InputRef, t } = useContext(MyContext);

  return (
    <>
      <textarea
        style={{
          resize: "none",
          width: "100%",
          direction: `${t("direction")}`,
        }}
        value={value}
        onChange={handleTyping}
        placeholder={t("placeholder")}
        name="value"
        type="text"
        ref={InputRef}
      ></textarea>
    </>
  );
};

export default TextArea;
