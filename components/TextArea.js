import { useContext } from "react";
import { MyContext } from "../context/Context";
import Clipboard from "./icons/Clipboard";
import SelectAll from "./icons/SelectAll";
import Reset from "./icons/Reset";
import AddIcon from "./icons/AddIcon";

const TextArea = () => {
  const {
    value,
    setValue,
    handleTyping,
    handleSelect,
    InputRef,
    t,
    i18n,
    tasks,
    addTask,
    handleDelete,
    handleClear,
  } = useContext(MyContext);

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
      {i18n.language === "en" ? (
        <button
          onClick={() => {
            i18n.changeLanguage("ar");
          }}
          style={{ margin: "10px 0 10px 0" }}
        >
          AR
        </button>
      ) : (
        <button
          onClick={() => {
            i18n.changeLanguage("en");
          }}
          style={{ margin: "10px 0 10px 0" }}
        >
          EN
        </button>
      )}
      <div>
        <button
          onClick={() => navigator.clipboard.writeText(value)}
          style={{ marginRight: `${t("marginRight")}` }}
        >
          <span>
            <Clipboard iconWidth={20} />
            {t("clipboard")}
          </span>
        </button>

        <button
          className="btn btn-primary form-control material-icons"
          onClick={addTask}
        >
          <span>
            <AddIcon iconWidth={20} />
            Save
          </span>
        </button>

        <button onClick={handleSelect} style={{ marginRight: "10px" }}>
          <span>
            <SelectAll iconWidth={20} />
            {t("selectAll")}
          </span>
        </button>
        <button onClick={() => setValue("")}>
          <span>
            <Reset iconWidth={20} />
            {t("reset")}
          </span>
        </button>
      </div>
      <div className="container row">
        <div className="badge">
          You have
          {!tasks.length
            ? " no tasks"
            : tasks.length === 1
            ? " 1 value"
            : tasks.length > 1
            ? ` ${tasks.length} tasks`
            : null}
        </div>
        {tasks.map((value) => (
          <div key={value.id}>
            <div className="col-11">
              <span
                className="form-control bg-white btn mt-2"
                style={{ textAlign: "left", fontWeight: "bold" }}
              >
                {value.title}
              </span>
            </div>

            <div className="col-1">
              <button
                className=" mt-2 btn btn-warning material-icons"
                onClick={() => handleDelete(value)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
        {!tasks.length ? null : (
          <div>
            <button
              className="btn btn-secondary  mt-4 mb-4"
              onClick={() => handleClear()}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TextArea;
