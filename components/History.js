import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import RippleButton from "../components/RippleButton";

const History = () => {
  const [copy, setCopy] = useState("");
  const { t, tasks, handleDelete, handleClear, show, handleShow } =
    useContext(MyContext);

  return (
    <div>
      <div>
        <div>
          {t("youhave")}
          {!tasks.length
            ? ` ${t("noTasks")}`
            : tasks.length === 1
            ? ` ${t("oneValue")}`
            : tasks.length > 1
            ? ` ${tasks.length} ${t("tasks")}`
            : null}
        </div>
        <RippleButton
          text={!show ? `${t("showHistory")}` : `${t("hideHistory")}`}
          onClick={handleShow}
          component={!show ? "ShowIcon" : "HideIcon"}
        ></RippleButton>
        <p>{copy}</p>
        {show && (
          <div>
            {tasks.map((value) => (
              <div key={value.id}>
                <div>
                  <span style={{ textAlign: "left", fontWeight: "bold" }}>
                    {value.title}
                  </span>
                </div>

                <div>
                  <RippleButton
                    onClick={() => handleDelete(value)}
                    component="Reset"
                  ></RippleButton>
                  <RippleButton
                    onClick={() => {
                      navigator.clipboard.writeText(value.title);
                      setCopy("Copied!");
                      setTimeout(() => {
                        setCopy("");
                      }, 1000);
                    }}
                    style={{ marginRight: `${t("marginRight")}` }}
                    component="Clipboard"
                  ></RippleButton>
                </div>
              </div>
            ))}
            {!tasks.length ? null : (
              <div>
                <RippleButton
                  text={t("clear")}
                  onClick={() => handleClear()}
                  component="Reset"
                ></RippleButton>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
