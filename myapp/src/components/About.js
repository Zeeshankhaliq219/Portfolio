import React from "react";
import MYPIC from "../assets/img/my_picAbout.jpg";

export default function About() {
  return (
    <>
      <span id="About"></span>
      <div className="py-5 my-5 d-sm-none"></div>
      <div className="py-5 my-5 d-sm-none"></div>
      <div className="container my-md-5">
        <h1 className="text-center text-primary fw-bolder aboutText">
          About Me
        </h1>
        <div className="row py-3">
          <div className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-center align-items-center">
            <img
              className="img-fluid aboutpic rounded-3"
              src={MYPIC}
              alt="MYPIC"
            />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h2 class="content-title">Hey There! I'm Zeeshan Khaliq</h2>
            <p className="fs-4">
              I'm a front end developer based in pakistan. I'm passionate about
              building web applications and experimenting with new technologies. <br />
              In my spare time I like to play football, workout, reading and
              travelling. I'm always down for hearing about new projects, so
              feel free to drop me a line. <br /> I hope you enjoy browsing my
              portfolio, and I look forward to the opportunity to bring your
              next web development project to life. <br />
              <span className="text-primary fw-bolder">
                Let's build cool things!
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
