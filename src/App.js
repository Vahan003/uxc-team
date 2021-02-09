import React, { useState,useLocation } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./screens/Main";
import Furniture from "./screens/Furniture";
import Lighting from "./screens/Lighting";
import Decor from "./screens/Decor";
import Tablewear from "./screens/Tablewear";
import Basket from "./screens/Basket";
import Search from "./screens/Search";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import "./styles/app.sass";
function App() {
  const [screen, setScreen] = useState("");
  return (
    <Router>
      <div className="app">
        <div className="bar">
        <Link to='./' onClick={()=> setScreen("Main")}><Logo /></Link>
          <Navbar setScreen={setScreen}/>
        </div>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Furniture">
            <Furniture />
          </Route>
          <Route path="/Lighting">
            <Lighting />
          </Route>
          <Route path="/Decor">
            <Decor />
          </Route>
          <Route path="/Tablewear">
            <Tablewear />
          </Route>
          <Route path="/Basket">
            <Basket />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="*">
          <NotFound/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function NotFound( ){
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
