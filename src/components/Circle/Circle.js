import { useState } from "react";
import "./Circle.css";

const Circle = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div
      className={`circle${active ? " circle--on" : ""}`}
      onClick={toggleActive}
    ></div>
  );
};

export default Circle;
