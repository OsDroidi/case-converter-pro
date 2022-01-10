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
import TextArea from "./TextArea";
import WordCount from "./WordCount";
import Footer from "./Footer";
import History from "./History";
import Time from "./Time";
import QuotesText from "./QuotesText";
import QuickIcons from "./QuickIcons";
import Language from "./Language";
import NavBar from "./NavBar";
import HorizontalScrollable from "./HorizontalScrollable";

const Main = () => {
  const { t } = useContext(MyContext);

  return (
    <>
      <div
        style={{
          direction: `${t("direction")}`,
        }}
      >
        <NavBar />
        <h1 className="title">{t("title")}</h1>
        <div className="flex-header">
          <Time />
          <QuotesText />
        </div>
        <Language />
        <TextArea />
        <WordCount />
        <HorizontalScrollable />
        <div className="cards">
          <UpperCase />
          <LowerCase />
          <CapitalizedCase />
          <ArabicAccent />
          <RemoveUrl />
          <RemoveEmoji />
          <ConvertNumbers />
          <FixNumbers />
          <CamelCase />
          <DuplicatedWords />
          <SnakeCase />
          <Slug />
        </div>
        <QuickIcons />
        <History />
      </div>
      <Footer />
      <br />
    </>
  );
};

export default Main;
