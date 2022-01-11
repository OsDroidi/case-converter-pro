import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import Clipboard from "./icons/Clipboard";
import Reset from "./icons/Reset";
import ShowIcon from "./icons/ShowIcon";
import HideIcon from "./icons/HideIcon";

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
        <button onClick={handleShow}>
          {!show ? (
            <span>
              <ShowIcon iconWidth={20} />
              {t("showHistory")}
            </span>
          ) : (
            <span>
              <HideIcon iconWidth={20} />
              {t("hideHistory")}
            </span>
          )}
        </button>
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
                  <button onClick={() => handleDelete(value)}>
                    <span>
                      <Reset iconWidth={20} />
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(value.title);
                      setCopy("Copied!");
                      setTimeout(() => {
                        setCopy("");
                      }, 1000);
                    }}
                    style={{ marginRight: `${t("marginRight")}` }}
                  >
                    <span>
                      <Clipboard iconWidth={20} />
                    </span>
                  </button>
                </div>
              </div>
            ))}
            {!tasks.length ? null : (
              <div>
                <button onClick={() => handleClear()}>{t("clear")}</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
