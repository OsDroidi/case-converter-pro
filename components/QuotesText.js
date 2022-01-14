import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { MyContext } from "../context/Context";
import Clipboard from "./icons/Clipboard";

const QuotesText = () => {
  const { t } = useContext(MyContext);
  const [quote, setQuote] = useState([]);
  const [copySuccess, setCopySuccess] = useState("");

  useEffect(() => {
    axios
      .get(`${t("quotes")}`)
      .then((response) => {
        console.log(
          response.data[Math.floor(Math.random() * response.data.length)]
        );
        setQuote(
          response.data[Math.floor(Math.random() * response.data.length)]
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [t]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `“${quote.text}” \n- ${quote.author} \n\nhttps://case-converter-pro.vercel.app/`
    );
    setCopySuccess("Copied!");
    setTimeout(() => {
      setCopySuccess("");
    }, 1000);
  };

  // Do not render until the first quote is loaded
  if (!quote) return null;

  return (
    <div className="quotes" onClick={copyToClipboard}>
      <p>“{quote.text}”</p>
      <p>
        - {quote.author} <Clipboard iconWidth={20} />
      </p>
      {copySuccess}
    </div>
  );
};

export default QuotesText;
