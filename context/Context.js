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
  const [data, setData] = useState(null);
  const [copySuccess, setCopySuccess] = useState("");
  const [copy, setCopy] = useState("");
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update
  const locale = `${t("time")}`;

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error);
      setData({ content: "Opps... Something went wrong" });
    }
  }

  // Run `updateQuote` once when component mounts
  useEffect(() => {
    updateQuote();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `“${data.content}” \n- ${data.author} \n\nhttps://case-converter-pro.vercel.app/`
    );
    setCopySuccess("Copied!");
    setTimeout(() => {
      setCopySuccess("");
    }, 1000);
  };

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
        copyToClipboard,
        copyClipboard,
        copySuccess,
        setCopySuccess,
        data,
        updateQuote,
        setCopy,
        copy,
        wish,
        date,
        time,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
