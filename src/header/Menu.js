import React from "react";
import './menu.css';

function Menu(props) {
  return (
    <div className="menu">
     
        <div className="menu__logo">
            <img src={require("../images/logo.png")} alt="#"/>
            <spam style={{color:props.col, fontSize:props.fs}}>Interno</spam>
        </div>

        <nav className="navigation">
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">Cervices</a>
            <a href="">Pages</a>
            <a href="">Contact us</a>
        </nav>
        
    </div>

  );
}

export default Menu;