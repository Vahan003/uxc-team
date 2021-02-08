import React, { useState } from "react";
import { ReactComponent as MarketSvg } from "./icon/market.svg";
import { ReactComponent as SearchSvg } from "./icon/search.svg";
import "../styles/navbar.sass";
const Navbar = () => {
  const [active, setActive] = useState("");
  const onNav = (e) => {
    setActive(e.currentTarget.id);
    console.log(e.currentTarget.id);
  };
  return (
    <div className="navbar">
      <span id="Furniture" className={active === "Furniture" ? "nav active" : "nav"} onClick={onNav}>
        Furniture
      </span>
      <span id="Lighting" className={active === "Lighting" ? "nav active" : "nav"}  onClick={onNav}>
        Lighting
      </span>
      <span id="Decor" className={active === "Decor" ? "nav active" : "nav"}  onClick={onNav}>
        Decor
      </span>
      <span id="Tablewear" className={active === "Tablewear" ? "nav active" : "nav"}  onClick={onNav}>
        Tablewear
      </span>
      <div className="nav-icones">
        <div id="Market" className={active === "Market" ? "market active" : "market"}  onClick={onNav}>
          <MarketSvg className="market-svg" />
        </div>
        <div id="Search" className={active === "Search" ? "search active" : "search"} onClick={onNav}>
          <SearchSvg className="search-svg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
