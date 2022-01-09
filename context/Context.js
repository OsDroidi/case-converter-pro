import React, { useState, useRef, useEffect, createContext } from "react";
import { useTranslation } from "react-i18next";

export const MyContext = createContext({
  toggle: () => {},
});

export default function ThemeProvider({ children }) {
  const [value, setValue] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const [lang, setLang] = useState(false);
  const { t, i18n } = useTranslation();
  const [darkTheme, setDarkTheme] = useState(undefined);
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);

  const toggle = () => {
    // A smooth transition on theme switch
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition: background .5s ease";

    setDarkTheme(!darkTheme);
  };

  const InputRef = useRef(null);

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  useEffect(() => {
    setWordCount(
      value.trim().split(/\s+/)[0] === "" ? 0 : value.trim().split(/\s+/).length
    );
  }, [value]);

  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTasks(storedList);
    }
  }, []);

  const addTask = (e) => {
    if (value) {
      const newTask = { id: new Date().getTime().toString(), title: value };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setValue("");
    }
  };

  const handleDelete = (value) => {
    const deleted = tasks.filter((t) => t.id !== value.id);
    setTasks(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted));
  };

  const handleClear = () => {
    setTasks([]);
    localStorage.removeItem("localTasks");
  };

  const handleTyping = (e) => {
    setValue(e.target.value);
    setLineCount(countLine);
  };

  const countLine = () => {
    let lines = value.split(/\r|\r\n|\n/);
    let count = lines.length;
    return count;
  };

  const handleSelect = () => {
    if (InputRef) {
      InputRef.current.select();
    }
  };

  const SwitchLanguage = () => {
    setLang(!lang);
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <MyContext.Provider
      value={{
        value,
        setValue,
        handleTyping,
        countLine,
        handleSelect,
        SwitchLanguage,
        wordCount,
        setWordCount,
        lineCount,
        setLineCount,
        lang,
        setLang,
        InputRef,
        t,
        i18n,
        toggle,
        darkTheme,
        setDarkTheme,
        tasks,
        setTasks,
        addTask,
        handleDelete,
        handleClear,
        show,
        setShow,
        handleShow,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
