import React, { useContext } from "react";
import { MyContext } from "../context/Context";
import TextArea from "./TextArea";
import WordCount from "./WordCount";
import Footer from "./Footer";
import History from "./History";
import Time from "./Time";
import QuotesText from "./QuotesText";
import QuickIcons from "./QuickIcons";
import Language from "./Language";
import NavBar from "./NavBar";
import All from "./filter/All";
import Codeing from "./filter/Codeing";
import Text from "./filter/Text";
import Categories from "./filter/Categories";
import GithubCorner from "react-github-corner";

const Main = () => {
  const { t, showAllFilter, showProgramming, showText } = useContext(MyContext);
  return (
    <>
      <GithubCorner
        href="https://github.com/OsDroidi/case-converter-pro"
        bannerColor="#000"
        octoColor="#fff"
        size={80}
        direction="right"
        svgStyle={{ mixBlendMode: "darken" }}
        target="_blank"
      />
      <NavBar />
      <div
        style={{
          direction: `${t("direction")}`,
        }}
      >
        <h1 className="title">{t("title")}</h1>
        <div className="flex-header">
          <Time />
          <QuotesText />
        </div>
        <Language />
        <QuickIcons />
        <TextArea />
        <WordCount />
        <Categories />
        <div className="cards">
          <>
            {showAllFilter && (
              <>
                <All />
              </>
            )}
            {showProgramming && (
              <>
                <Codeing />
              </>
            )}
            {showText && (
              <>
                <Text />
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
