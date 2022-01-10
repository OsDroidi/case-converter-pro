import { useContext } from "react";
import { MyContext } from "../context/Context";

const WordCount = () => {
  const { value, wordCount, lineCount, t } = useContext(MyContext);

  return (
    <div className="word-count">
      <p>
        {t("characterCount")}: {value.replace(/\s/g, "").length}
      </p>
      <span>|</span>
      <p>
        {t("characterWithSpace")}: {value.length}
      </p>
      <span>|</span>
      <p>
        {t("wordCount")}: {wordCount}
      </p>
      <span>|</span>
      <p>
        {t("lineCount")}: {lineCount}
      </p>
    </div>
  );
};

export default WordCount;
