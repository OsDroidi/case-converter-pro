import { useContext } from "react";
import { MyContext } from "../context/Context";
import Clipboard from "./icons/Clipboard";
import Reset from "./icons/Reset";
import ShowIcon from "./icons/ShowIcon";
import HideIcon from "./icons/HideIcon";

const History = () => {
  const { t, tasks, handleDelete, handleClear, show, handleShow } =
    useContext(MyContext);

  return (
    <div>
      <div>
        <div>
          You have
          {!tasks.length
            ? " no tasks"
            : tasks.length === 1
            ? " 1 value"
            : tasks.length > 1
            ? ` ${tasks.length} tasks`
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
                    onClick={() => navigator.clipboard.writeText(value.title)}
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
                <button onClick={() => handleClear()}>Clear</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
