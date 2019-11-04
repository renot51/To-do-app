import React from "react";
import "../css/App.scss";
import logo from "../images/image.png";

function Navigation() {
  return (
    //its called jsx here!
    <div className="navigation">
      <img src={logo} alt="logo" />
      <a>Help</a>
    </div>
  );
}

export default Navigation;
