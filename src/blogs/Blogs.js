import React from "react";
import './blogs.css';

function Blogs() {
  return (

    <section className="blogs">

        <h2 className="blogs__h2">Recent Blogs</h2>
        <p className="blogs__p">
            Get updates about our latest trends and techniques used in<br></br>
            interior design project works.
        </p>

        <div className="blog">

            <div className="blog__example">

                <img src={require("../images/blogs/1.png")} alt="#"/>

                <h4>Residential Interior Designer In New York, USA</h4>

                <div className="example__info">
                    <p>November 23, 2021</p>

                    <button className="blog__btn"></button>
                </div>
            </div>

            <div className="blog__example">

                <img src={require("../images/blogs/1.png")} alt="#"/>

                <h4>Residential Interior Designer In New York, USA</h4>

                <div className="example__info">
                    <p>November 23, 2021</p>

                    <button className="blog__btn"></button>
                </div>
            </div>

            <div className="blog__example">

                <img src={require("../images/blogs/1.png")} alt="#"/>

                <h4>Residential Interior Designer In New York, USA</h4>

                <div className="example__info">
                    <p>November 23, 2021</p>

                    <button className="blog__btn"></button>
                </div>
            </div>

            <div className="blog__example">

                <img src={require("../images/blogs/1.png")} alt="#"/>

                <h4>Residential Interior Designer In New York, USA</h4>

                <div className="example__info">
                    <p>November 23, 2021</p>

                    <button className="blog__btn"></button>
                </div>
            </div>

            <div className="blog__example">

                <img src={require("../images/blogs/1.png")} alt="#"/>

                <h4>Residential Interior Designer In New York, USA</h4>

                <div className="example__info">
                    <p>November 23, 2021</p>

                    <button className="blog__btn"></button>
                </div>
            </div>

            <div className="blog__example">

                <img src={require("../images/blogs/1.png")} alt="#"/>

                <h4>Residential Interior Designer In New York, USA</h4>

                <div className="example__info">
                    <p>November 23, 2021</p>

                    <button className="blog__btn"></button>
                </div>
            </div>

        </div>


        <div className="join">

            <h2 className="join__h">Wanna join the interno?</h2>

            <p className="join__p">Contact Us & Get a Free Consultation</p>

            <button className="connect"></button>
        </div>

    </section>

    );
}

export default Blogs;