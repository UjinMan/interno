import React from "react";
import './hero.css';

function Hero() {
  return (
    <div className="Hero">
     
          {/* <h1 style={{color:"red", fontWeight:"bold", }}>Text style</h1> */}
      <div className="hero__item">

          <h1 className="dream">
            Let's Create Your <br></br>
            Dream Interior
          </h1>

          <p class="p">
          The world needs innovators and problem solvers who turn<br></br>
          challenges into greater opportunities.
          </p>

          <button className="gstarted"> </button>

       </div>


    </div>

  );
}

export default Hero;