import React from "react";
import Preview from "../components/Preview";
import '../styles/sections.sass'
const PreviewSection = (props) => {
  return (
    <div>
      <Preview click={props.click}/>
    </div>
  );
};

export default PreviewSection;
