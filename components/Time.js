import { useContext } from "react";
import { MyContext } from "../context/Context";

const Time = () => {
  const { t, wish, date, time } = useContext(MyContext);

  return (
    <div style={{ textAlign: "center" }}>
      <p>{wish}</p>
      <p>{date}</p>
      <p>{time}</p>
    </div>
  );
};

export default Time;
