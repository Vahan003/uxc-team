import React, { useRef } from "react";
import { useHistory} from "react-router-dom";
import PreviewSection from "../sections/PreviewSection";
import AboutSection from "../sections/AboutSection";
import FooterSection from "../sections/FooterSection";
const Main = () => {
  const myRef = useRef(null);
  const history = useHistory();
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });


  return (
    <div className="main">
      <PreviewSection click={executeScroll} />
      <AboutSection _ref={myRef} _history ={history}/>
      <FooterSection _history ={history}/>
    </div>
  );
};

export default Main;
