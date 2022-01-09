import React, { useState, useEffect } from "react";
import Clipboard from "./icons/Clipboard";

const QuotesText = () => {
  const [data, setData] = useState(null);

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

  // Do not render until the first quote is loaded
  if (!data) return null;

  return (
    <div
      style={{ textAlign: "center" }}
      onClick={() =>
        navigator.clipboard.writeText(
          `${data.content} \n- ${data.author} \n\nhttps://case-converter-pro.vercel.app/`
        )
      }
    >
      <p>{data.content}</p>
      <p>
        - {data.author} <Clipboard iconWidth={20} />
      </p>
      <br />
    </div>
  );
};

export default QuotesText;
