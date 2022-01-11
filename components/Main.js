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
  const [showText, setShowText] = React.useState(false);
  const [showProgramming, setShowProgramming] = React.useState(false);

  const handleShow = () => {
    setShow(true);
    setShowProgramming(false);
    setShowText(false);
  };

  const handleShowText = () => {
    setShow(false);
    setShowProgramming(false);
    setShowText(true);
  };

  const handleShowProgramming = () => {
    setShow(false);
    setShowText(false);
    setShowProgramming(true);
  };

  const supportUs = () => {
    window.open("https://www.paypal.me/osdroidi", "_blank");
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
        <QuickIcons />
        <TextArea />
        <WordCount />
        <div className="scrollmenu">
          <button onClick={handleShow}>{t("all")}</button>
          <button onClick={handleShowText}>{t("text")}</button>
          <button onClick={handleShowProgramming}>{t("coding")}</button>
          <button onClick={supportUs}>{t("more")}</button>
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
                <CamelCase />
                <DuplicatedWords />
                <SnakeCase />
                <Slug />
              </>
            )}
            {showText && (
              <>
                <UpperCase />
                <LowerCase />
                <CapitalizedCase />
                <ArabicAccent />
                <RemoveUrl />
                <ConvertNumbers />
                <FixNumbers />
                <RemoveEmoji />
              </>
            )}
          </>
        </div>
        <History />
        <Footer />
        <br />
      </div>
    </>
  );
};

export default Main;
