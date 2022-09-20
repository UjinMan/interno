import React from "react";
import './brands.css';

function Brands() {
  return (

    <section className="brands">

        <div className="brands__block">

            <div className="brand">
                <img src={require("../images/people/mhome.png")} alt="#"/>
            </div>

            <div className="brand">
                <img src={require("../images/people/vs.png")} alt="#"/>
            </div>

            <div className="brand">
                <img src={require("../images/people/b.png")} alt="#"/>
            </div>

            <div className="brand">
                <img src={require("../images/people/nature.png")} alt="#"/>
            </div>

            <div className="brand">
                <img src={require("../images/people/classic.png")} alt="#"/>
            </div>

        </div>

    </section>

    );
}

export default Brands;