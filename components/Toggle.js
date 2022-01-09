import { MyContext } from "../context/Context";
import { useContext } from "react";

export const Toggle = () => {
  const { darkTheme, toggle } = useContext(MyContext);

  return (
    <div>
      <div className="dark-mode" onClick={toggle}>
        {!darkTheme ? <span>🌚</span> : <span>🌞</span>}
      </div>
    </div>
  );
};
