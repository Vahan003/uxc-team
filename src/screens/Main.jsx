import React, { useRef } from "react";
import PreviewSection from "../sections/PreviewSection";
import AboutSection from "../sections/AboutSection";
import FooterSection from "../sections/FooterSection";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
const Main = () => {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth"});

  return (
    <div className="main">
        <div className="bar">
        <Logo />
        <Navbar />
      </div>
      <PreviewSection click={executeScroll} />
      <AboutSection _ref={myRef} />
      <FooterSection />
    </div>
  );
};

export default Main;
