import { useContext } from "react";
import { MyContext } from "../context/Context";
import RippleButton from "../components/RippleButton";

const TextArea = () => {
  const {
    value,
    handleTyping,
    t,
    InputRef,
    toggleArea,
    inputElement,
    toggleTextArea,
  } = useContext(MyContext);

  return (
    <>
      {toggleArea ? (
        <textarea
          style={{
            resize: "none",
            width: "100%",
            direction: `${t("direction")}`,
            overflow: "hidden",
          }}
          value={value}
          onChange={handleTyping}
          placeholder={t("placeholder")}
          name="value"
          type="text"
          ref={InputRef}
        ></textarea>
      ) : (
        <textarea
          style={{
            width: "100%",
            direction: `${t("direction")}`,
          }}
          value={value}
          onChange={handleTyping}
          placeholder={t("placeholder")}
          name="value"
          type="text"
          ref={inputElement}
        ></textarea>
      )}
      <RippleButton
        text={
          !toggleArea
            ? "Enable Auto Grow Textarea"
            : "Disable Auto Grow Textarea"
        }
        onClick={() => toggleTextArea(!toggleArea)}
      ></RippleButton>
    </>
  );
};

export default TextArea;
