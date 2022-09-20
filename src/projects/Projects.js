import React from "react";
import './projects.css';

function Projects() {
  return (

    <section className="projects">

        <h2 className="proj__h2">Recent Projects</h2>

        <p className="proj__p">
            With tools to make every part of your process more human and a support team<br></br>
            excited to help you, getting started with us never been easier.
        </p>

        <div className="examples">

            <div className="example">

                <img src={require("../images/projects/1.png")} alt="#"/>

                <div className="example__info">

                    <div className="text">
                        <h4>Winery Dry Creek Building</h4>

                        <p className="proj__p">Art Modern</p>
                    </div>

                    <button className="example__btn"></button>

                </div>

            </div>

            <div className="proj__example">

                <img src={require("../images/projects/2.png")} alt="#"/>

                <div className="example__info">

                    <div className="text">
                        <h4>Creative Workplace Design</h4>

                        <p className="proj__p">AMinimalist</p>
                    </div>

                    <button className="example__btn"></button>
                    
                </div>

            </div>

            <div className="example">

                <img src={require("../images/projects/3.png")} alt="#"/>

                <div className="example__info">

                    <div className="text">
                        <h4>Bedroom Interior Pot Work</h4>

                        <p className="proj__p">Modern</p>
                    </div>

                    <button className="example__btn"></button>
                    
                </div>

            </div>

            <div className="example">

                <img src={require("../images/projects/4.png")} alt="#"/>

                <div className="example__info">

                    <div className="text">
                        <h4>Light Ambience Sepia Design</h4>

                        <p className="proj__p">Scandinavian</p>
                    </div>

                    <button className="example__btn"></button>
                    
                </div>

            </div>

        </div>

    </section>

    );
}

export default Projects;