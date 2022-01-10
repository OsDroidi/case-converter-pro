import React from "react";
import LanguageIcon from "./icons/LanguageIcon";
import Reset from "./icons/Reset";
import Clipboard from "./icons/Clipboard";
import ShowIcon from "./icons/ShowIcon";
import HideIcon from "./icons/HideIcon";
import SelectAll from "./icons/SelectAll";
import AddIcon from "./icons/AddIcon";
const RippleButton = ({ text, onClick, component }) => {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <button
      className="ripple-button"
      onClick={(e) => {
        const rect = e.target.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ""
      )}
      <span>
        {component === "LanguageIcon" ? <LanguageIcon iconWidth={20} /> : ""}
        {component === "Clipboard" ? <Clipboard iconWidth={20} /> : ""}
        {component === "ShowIcon" ? <ShowIcon iconWidth={20} /> : ""}
        {component === "HideIcon" ? <HideIcon iconWidth={20} /> : ""}
        {component === "SelectAll" ? <SelectAll iconWidth={20} /> : ""}
        {component === "Reset" ? <Reset iconWidth={20} /> : ""}
        {component === "AddIcon" ? <AddIcon iconWidth={20} /> : ""}
        {text}
      </span>
    </button>
  );
};

export default RippleButton;
