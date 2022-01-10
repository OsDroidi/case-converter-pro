import React, { useContext } from "react";
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

const Main = () => {
  const { t } = useContext(MyContext);

  const [show, setShow] = React.useState(true);
  const [showProgramming, setShowProgramming] = React.useState(false);

  const handleShow = () => {
    setShow(true);
    setShowProgramming(false);
  };

  const handleShowProgramming = () => {
    setShow(false);
    setShowProgramming(true);
  };

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
        <div className="scrollmenu">
          <button onClick={handleShow}>All</button>
          <button onClick={handleShowProgramming}>Programming</button>
          <button>More...</button>
        </div>

        <div className="cards">
          <>
            {show && (
              <>
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
              </>
            )}
            {showProgramming && (
              <>
                <ConvertNumbers />
                <FixNumbers />
                <CamelCase />
                <DuplicatedWords />
                <SnakeCase />
                <Slug />
              </>
            )}
          </>
        </div>
        <QuickIcons />
        <History />
        <Footer />
        <br />
      </div>
    </>
  );
};

export default Main;
