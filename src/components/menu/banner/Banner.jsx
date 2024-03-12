import React from "react";
import "./banner.css";
import ban from "../../../assets/banner.png";
const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="bancontent">
          <div className="banpart">
            <h1>We Are Digital Product Design Agency</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <a href="#">Get Started</a>
          </div>
          <div className="banimg">
            <img src={ban} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
