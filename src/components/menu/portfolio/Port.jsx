import React from "react";
import "./port.css";
import pic from "../../../assets/pic1.png"
const Port = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="portcontent">
          <h1>Our Work Portfolio</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="worklist">
          <ul>
            <li>
              <a href="#" className="active">All</a>
            </li>
            <li>
              <a href="#">Graphic Design</a>
            </li>
            <li>
              <a href="#">Mobile App</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Web Design</a>
            </li>
          </ul>
        </div>
        <div className="flex">
            <div className="project">
                <a href="#"><img src={pic} alt="pic" /></a>
                <div className="piccon">
                    <h3>Graphic Design</h3>
                    <p>See Details -</p>
                </div>
            </div>
            <div className="project">
            <a href="#"><img src={pic} alt="pic" /></a>
                <div className="piccon">
                    <h3>Graphic Design</h3>
                    <p>See Details -</p>
                </div>
            </div>
            <div className="project">
            <a href="#"><img src={pic} alt="pic" /></a>
                <div className="piccon">
                    <h3>Graphic Design</h3>
                    <p>See Details -</p>
                </div>
            </div>
            <div className="project">
            <a href="#"><img src={pic} alt="pic" /></a>
                <div className="piccon">
                    <h3>Graphic Design</h3>
                    <p>See Details -</p>
                </div>
            </div>
            {/* <div className="project">
                <a href="#"><img src={pic} alt="pic" /></a>
                <div className="piccon">
                    <h3>Graphic Design</h3>
                    <p>See Details -</p>
                </div>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default Port;
