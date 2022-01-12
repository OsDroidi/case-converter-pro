import { useContext } from "react";
import { MyContext } from "../context/Context";

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
      <button onClick={() => toggleTextArea(!toggleArea)}>
        {!toggleArea
          ? "Enable Auto Grow Textarea"
          : "Disable Auto Grow Textarea"}
      </button>
    </>
  );
};

export default TextArea;
