import React from "react";
import MYPIC from "../assets/img/my_picAbout.jpg";

export default function About() {
  return (
    <>
      <div className="container">
        <h1 className="text-center text-primary fw-bolder aboutText">
          About Me
        </h1>
        <div className="row py-3">
          <div className="col-12 col-md-6">
            <img
              className="img-fluid aboutpic rounded-3"
              src={MYPIC}
              alt="MYPIC"
            />
          </div>
          <div className="col-12 col-md-6">
            <h2 class="content-title">Hey There! I'm Zeeshan Khaliq</h2>
            <p className="fs-4">
              I'm a front end developer based in pakistan.
              I'm passionate about building web applications and experimenting
              with new technologies. In my spare time I like to play football,
              workout, reading and travelling. I'm always down for hearing about
              new projects, so feel free to drop me a line. I hope you enjoy
              browsing my portfolio, and I look forward to the opportunity to
              bring your next web development project to life. <br />
              <span className="text-primary fw-bolder">Let's build cool things!</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
