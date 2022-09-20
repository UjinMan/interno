import React from "react";
import './section1.css';

function Section1() {
  return (
    <section className="section1">

        <div className="design">
     
            <div className="design__block">

                <h4>Interior Design</h4>

                <p>
                    Enhancing the interior to achieve<br></br>
                    a healthier environment for the<br></br>
                    people using right space.
                </p>

                <button className="first">View More <img src={require("../images/sarrow.png")} alt="#"/></button>

            </div>

            <div className="design__block">

                <h4>Furniture</h4>

                <p>
                    Movable articles that are used<br></br>
                    to make a room or building<br></br>
                    suitable for living or working.   
                </p>

                <button>View More <img src={require("../images/sarrow.png")} alt="#"/></button>

            </div>

            <div className="design__block">

                <h4>Flooring</h4>

                <p>
                    Thin object any finished <br></br>
                    material applied over a floor <br></br>
                    structure to provide a walking<br></br>
                    surface.
                </p>

                <button>View More <img src={require("../images/sarrow.png")} alt="#"/></button>

            </div>


        </div>

    </section>
  );
}

export default Section1;