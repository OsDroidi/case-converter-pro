import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../context/Context";

const Time = () => {
  const { t } = useContext(MyContext);
  const locale = `${t("time")}`;
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

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

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
    year: "numeric",
  })}`;

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  }`;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return (
    <div style={{ textAlign: "center" }}>
      <p>{wish}</p>
      <p>{date}</p>
      <p>{time}</p>
      <br />
    </div>
  );
};

export default Time;
