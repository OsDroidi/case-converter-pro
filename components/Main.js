import { useContext } from "react";
import { MyContext } from "../context/Context";
import ArabicAccent from "./convert/ArabicAccent";
import CamelCase from "./convert/CamelCase";
import CapitalizedCase from "./convert/CapitalizedCase";
import LowerCase from "./convert/LowerCase";
import RemoveEmoji from "./convert/RemoveEmoji";
import RemoveUrl from "./convert/RemoveUrl";
import SnakeCase from "./convert/SnakeCase";
import UpperCase from "./convert/UpperCase";
import DuplicatedWords from "./convert/DuplicatedWords";
import Slug from "./convert/Slug";
import ConvertNumbers from "./convert/ConvertNumbers";
import FixNumbers from "./convert/FixNumbers";
import { Toggle } from "./Toggle";
import TextArea from "./TextArea";
import WordCount from "./WordCount";
import Footer from "./Footer";

const Main = () => {
  const { t } = useContext(MyContext);

  return (
    <>
      <div
        style={{
          direction: `${t("direction")}`,
        }}
      >
        <Toggle />
        <h1>{t("title")}</h1>
        <TextArea />
        <div className="cards">
          <UpperCase />
          <LowerCase />
          <CapitalizedCase />
          <CamelCase />
          <SnakeCase />
          <ArabicAccent />
          <RemoveEmoji />
          <RemoveUrl />
          <DuplicatedWords />
          <Slug />
          <ConvertNumbers />
          <FixNumbers />
        </div>
        <WordCount />
      </div>
      <Footer />
    </>
  );
};

export default Main;
