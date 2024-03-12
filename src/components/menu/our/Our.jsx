import React from "react";
import "./our.css";
import img1 from "../../../assets/Icon1.png";
const Our = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="service">
          <h1>Our Services</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="flex">
          <div className="box">
            <div className="boxcontent">
              <img src={img1} alt="" />
              <h1>UI/UX Design</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="boxcontent">
              <img src={img1} alt="" />
              <h1>UI/UX Design</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="boxcontent">
              <img src={img1} alt="" />
              <h1>UI/UX Design</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="box1">
            <div className="boxcontent">
              <img src={img1} alt="" />
              <h1>UI/UX Design</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="box2">
            <div className="boxcontent">
              <img src={img1} alt="" />
              <h1>UI/UX Design</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="box3">
            <div className="boxcontent">
              <img src={img1} alt="" />
              <h1>UI/UX Design</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our;
