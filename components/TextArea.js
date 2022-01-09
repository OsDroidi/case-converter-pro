import { useContext } from "react";
import { MyContext } from "../context/Context";

const TextArea = () => {
  const { value, handleTyping, InputRef, t } = useContext(MyContext);

  return (
    <>
      <textarea
        style={{
          width: "100%",
          height: 200,
          direction: `${t("direction")}`,
        }}
        value={value}
        onChange={handleTyping}
        placeholder={t("placeholder")}
        ref={InputRef}
        name="value"
        type="text"
      ></textarea>
    </>
  );
};

export default TextArea;
