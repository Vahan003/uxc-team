import React, { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ReactComponent as MarketSvg } from "./icon/market.svg";
import { ReactComponent as SearchSvg } from "./icon/search.svg";
import "../styles/navbar.sass";
const Navbar = (props) => {
  const [active, setActive] = useState("");
  const onNav = (e) => {
    setActive(e.currentTarget.id);
    console.log(e.currentTarget.id);
  };
  return (
    <div className="navbar">
      <Link to="/Furniture" onClick={()=> props.setScreen("Furniture")}>
        <span
          id="Furniture"
          className={active === "Furniture" ? "nav active" : "nav"}
          onClick={onNav}
        >
          Furniture
        </span>
      </Link>
      <Link to="/Lighting" onClick={()=> props.setScreen("Lighting")}>
        <span
          id="Lighting"
          className={active === "Lighting" ? "nav active" : "nav"}
          onClick={onNav}
        >
          Lighting
        </span>
      </Link>
      <Link to="/Decor" onClick={()=> props.setScreen("Decor")}>
        <span
          id="Decor"
          className={active === "Decor" ? "nav active" : "nav"}
          onClick={onNav}
        >
          Decor
        </span>
      </Link>
      <Link to="/Tablewear" onClick={()=> props.setScreen("Tablewear")}>
        <span
          id="Tablewear"
          className={active === "Tablewear" ? "nav active" : "nav"}
          onClick={onNav}
        >
          Tablewear
        </span>
      </Link>
      <div className="nav-icones">
        <Link to="/Basket" onClick={()=> props.setScreen("Basket")}>
          <div
            id="Market"
            className={active === "Market" ? "market active" : "market"}
            onClick={onNav}
          >
            <MarketSvg className="market-svg" />
          </div>
        </Link>
        <Link to="/Search" onClick={()=> {props.setScreen("Search")}}>
          <div
            id="Search"
            className={active === "Search" ? "search active" : "search"}
            onClick={onNav}
          >
            <SearchSvg className="search-svg" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
