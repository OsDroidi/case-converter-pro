import { useContext } from "react";
import { MyContext } from "../context/Context";
import Clipboard from "./icons/Clipboard";

const QuotesText = () => {
  const { copyToClipboard, copySuccess, data } = useContext(MyContext);

  // Do not render until the first quote is loaded
  if (!data) return null;

  return (
    <div style={{ textAlign: "center" }} onClick={copyToClipboard}>
      <p>{data.content}</p>
      <p>
        - {data.author} <Clipboard iconWidth={20} />
      </p>
      {copySuccess}
      <br />
    </div>
  );
};

export default QuotesText;
