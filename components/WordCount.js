import { useContext } from "react";
import { MyContext } from "../context/Context";

const WordCount = () => {
  const { value, wordCount, lineCount, t } = useContext(MyContext);

  return (
    <>
      <p>
        {t("characterCount")}: {value.replace(/\s/g, "").length}
      </p>
      <p>
        {t("characterWithSpace")}: {value.length}
      </p>
      <p>
        {t("wordCount")}: {wordCount}
      </p>
      <p>
        {t("lineCount")}: {lineCount}
      </p>
    </>
  );
};

export default WordCount;
