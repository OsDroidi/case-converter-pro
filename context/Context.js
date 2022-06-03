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
  const [copy, setCopy] = useState("");
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update
  const [toggleArea, setToggleArea] = useState(false);
  const [showAllFilter, setShowAllFilter] = useState(true);
  const [showText, setShowText] = useState(false);
  const [showProgramming, setShowProgramming] = useState(false);

  const locale = `${t("time")}`;

  const copyClipboard = () => {
    navigator.clipboard.writeText(value);
    setCopy("Copied!");
    setTimeout(() => {
      setCopy("");
    }, 1000);
  };

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
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  useEffect(() => {
    if (InputRef.current) {
      InputRef.current.focus();
    }
  }, []);

  const toggleTextArea = () => {
    setToggleArea(!toggleArea);
  };

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

  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  useEffect(() => {
    if (InputRef && InputRef.current) {
      InputRef.current.style.height = "150px";
      const scrollHeight = InputRef.current.scrollHeight;
      InputRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
    year: "numeric",
  })}`;

  const hour = today.getHours();
  const wish = `${t("good")} ${
    (hour < 12 && `${t("morning")}`) ||
    (hour < 17 && `${t("afternoon")}`) ||
    `${t("evening")}`
  }`;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  const addTask = () => {
    if (value) {
      const newTask = { id: new Date().getTime().toString(), title: value };
      setTasks([newTask, ...tasks]);
      localStorage.setItem("localTasks", JSON.stringify([newTask, ...tasks]));
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

  const handleSelectNormal = () => {
    if (inputElement) {
      inputElement.current.select();
    }
  };

  const SwitchLanguage = () => {
    setLang(!lang);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const handleShowAll = () => {
    setShowAllFilter(true);
    setShowProgramming(false);
    setShowText(false);
  };

  const handleShowText = () => {
    setShowAllFilter(false);
    setShowProgramming(false);
    setShowText(true);
  };

  const handleShowProgramming = () => {
    setShowAllFilter(false);
    setShowText(false);
    setShowProgramming(true);
  };

  // const supportUs = () => {
  //   window.open("https://www.paypal.me/osdroidi", "_blank");
  // };

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
        copyClipboard,
        setCopy,
        copy,
        wish,
        date,
        time,
        toggleArea,
        setToggleArea,
        inputElement,
        toggleTextArea,
        handleSelectNormal,
        // supportUs,
        handleShowProgramming,
        handleShowText,
        handleShowAll,
        showAllFilter,
        setShowAllFilter,
        setShowProgramming,
        showProgramming,
        setShowText,
        showText,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
