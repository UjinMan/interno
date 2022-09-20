import React from "react";
import './stat.css';

function Stat() {
  return (

    <section className="statistics">

        <div className="stat">

            <div className="stat__item">
               <h3> 12 </h3>
               <p className="stat__p"> Years Of Experiance </p>
            </div>

            <div className="stat__item">
               <h3> 5K</h3>
               <p className="stat__p"> Success Project</p>
            </div>

            <div className="stat__item">
               <h3> 1K</h3>
               <p className="stat__p"> Active Project </p>
            </div>

            <div className="stat__item">
               <h3> 4K </h3>
               <p className="stat__p"> Happy Customers </p>
            </div>
            

        </div>

    </section>

    );
}

export default Stat;