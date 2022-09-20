import React from "react";
import './designs.css';

function Designs() {
  return (

    <section className="designs">

        <div className="designs__info">

            <h2 className="dinfo__h2">
                We Tackle The Most<br></br>
                Challenging Designs
            </h2>

            <p className="dinfo__p">
            The world needs innovators and problem solvers who<br></br>
            turn challenges into greater opportunities. We have<br></br>
            an insatiable curiosity about transformative trends<br></br>
             challenging the status.
            </p>

            <div className="call__us">
                <img src={require("../images/designs/frame.png")} alt="#"/>

                <p className="call__p">
                    012345678<br></br>
                    Call Us Anytime
                </p>
            </div>

            <button className="designs__btn">
                
            </button>

        </div>


        <div className="designs__img">
            <img src={require("../images/designs/designs.png")} alt="#"/>
        </div>

    </section>

    );
}

export default Designs;