import React from "react";
import './footer.css';

function Footer() {
  return (

    <footer>

        <div className="footer">

            <div className="footer__logo">

                <img className="foot__logo" src={require("../images/footer/logo.png")} alt="#"/>

                <p className="footer__p">
                    We are the leading architect and<br></br>
                    interior design firm in the world.
                </p>


                <img src={require("../images/footer/social.png")} alt="#"/>

            </div>


            <div className="footer__item">

                <ul>
                    <li>Pages</li>
                    <li><a href="#">Style Guide</a></li>
                    <li><a href="#">Protected</a></li>
                    <li><a href="#">Licenses</a></li>
                    <li><a href="#">Changelog</a></li>
                    <li><a href="#">404</a></li>
                </ul>

            </div>

            <div className="footer__item">

                <ul>
                    <li>Explore</li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Recent Blog</a></li>
                    <li><a href="#">Pricing Plan</a></li>
                    <li><a href="#">Our Projects</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>

            </div>

            <div className="footer__item">

                <ul>
                    <li>Contact</li>
                    <li>
                        53, East Birchwood Ave.<br></br>
                        Brooklyn, New York 11201, USA.
                    </li>
                    <li>contact@interno.com</li>
                    <li>(123) 456 - 7890</li>
                </ul>

            </div>

        </div>

    </footer>

    );
}

export default Footer;