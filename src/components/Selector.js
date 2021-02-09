import React, { useState } from "react";
import { ReactComponent as ArrowSelectorSvg } from "./icon/arrow-selector.svg";
import "../styles/selector.sass";
const Selector = (props) => {
  const [active, setActive] = useState("");
  const click = (event) => {
    active === "active" ? setActive("") : setActive("active");
  };
  return (
    <div className="selector">
      <div className={`select ${active}`} onClick={click}>
        <div className="text">{props.name ?? "Select"}</div>
        <div className="arrow" onClick={click}>
          <ArrowSelectorSvg className="arrow-selector-svg" />
        </div>
        <ul className="options">
          {props.option?.map((el) => (
            <li key={el} className="option">{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Selector;
