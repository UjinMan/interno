import React from "react";
import Menu from "./Menu";
import Hero from "./Hero";
import './header.css';

function Header() {
  return (
    <header className="Header">
     <Menu col="black" fs="46px"/>
     <Hero/>
    </header>
  );
}

export default Header;
