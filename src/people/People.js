import React from "react";
import './people.css';

function People() {
  return (

    <section className="people">

        <h2 className="people__h2">
            What the People Thinks<br></br>
            About Interno
        </h2>

        <div className="people__response">

            <div className="response__block">
                
                <div className="people__item">
                    <img src={require("../images/people/1.png")} alt="#"/>

                    <div className="people__info">
                        <h4>Lisa Clairton</h4>

                        <p>New York, USA</p>
                    </div>
                </div>

                <p className="people__p">
                    We selected Interno interior<br></br>
                    because of rigorous design<br></br>
                    background & education.
                </p>
            </div>

            <div className="response__block">
                
                <div className="people__item">
                    <img src={require("../images/people/2.png")} alt="#"/>

                    <div className="people__info">
                        <h4>David Knight</h4>

                        <p>Sydney, Australia</p>
                    </div>
                </div>

                <p className="people__p">
                The team exceeded our <br></br>
                expectations and emerged as <br></br>
                leaders of our project’s.
                </p>
            </div>

            <div className="response__block">
                
                <div className="people__item">
                    <img src={require("../images/people/3.png")} alt="#"/>

                    <div className="people__info">
                        <h4>Lisa Clairton</h4>

                        <p>Paris, France</p>
                    </div>
                </div>

                <p className="people__p">
                They balanced the architectural<br></br>
                vision and the project realities<br></br>
                beautifully.
                </p>
            </div>

        </div>

    </section>

    );
}

export default People;