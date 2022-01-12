import React, { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../context/Context";

const TextArea = () => {
  const { value, handleTyping, t, InputRef } = useContext(MyContext);
  const [toggle, setToggle] = useState(false);
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  const toggleTextArea = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? (
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
      <button onClick={() => toggleTextArea(!toggle)}>
        {!toggle ? "Enable Auto Grow Textarea" : "Disable Auto Grow Textarea"}
      </button>
    </>
  );
};

export default TextArea;
