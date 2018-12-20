import React from "react";
import "./Nav.css";

const Nav = props => (
    <div className="container-fluid">
    <nav className="navbar navbar-dark bg-dark">
      <ul>
        <li className="brand animated lightSpeedIn">
          <a href="/clicky-game/">{props.title}</a>
        </li>
  
        <li id="rw">{props.rightWrong}</li>
  
        <li id="cur-sco">Current Score: {props.score}</li>
  
        <li id="top-sco">Top Score: {props.topScore}</li>
      </ul>
    </nav>
    </div>
  );
export default Nav;