import React from "react";
import { ReactComponent as ArrowP } from "./icon/arrow-to-bottom.svg";
import "../styles/preview.sass";
const Preview = (props) => {
  return (
    <div className="preview" style={{backgroundImage: "url('/images/Rectangle-1.png')"}}>
      <h1 className="title">Create your comfort zone.</h1>
      <button className="scroll-button" onClick={props.click}>Shop now</button>
      <ArrowP className="arrow-svg" />
    </div>
  );
};

export default Preview;
